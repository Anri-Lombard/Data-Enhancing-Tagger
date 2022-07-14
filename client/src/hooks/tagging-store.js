import { initStore } from './store';
import { useEffect, useState } from 'react';

const configureStore = () => {
    const actions = {
        filter: (curState, keyword) => {
            let updatedVisibleOptions = "";

            if (keyword !== '') {
                const results = curState.tagOptions.filter((option) => {
                    return option.toLowerCase().includes(keyword.toLowerCase());
                });
                updatedVisibleOptions = results
                // setVisibleOptions(results);
            } else {
                // setVisibleOptions(tagOptions);
                updatedVisibleOptions = curState.tagOptions
            }
            // setQuery(keyword);
            const updatedQuery = keyword;

            // console.log("Updated query stuff:");
            // console.log(updatedVisibleOptions);
            // console.log(updatedQuery);

            return {
                ...curState,
                visibleOptions: updatedVisibleOptions,
                query: updatedQuery,
            }
        },
        updateTag: async (curState, PORT, user) => {
            let dataTagged = false;
            let userCategoriesArray = [];
            let usersTaggedArray = [];
            let editedTag = [];
            let updatedChosenCategory = "";
            let updatedTagOptions = "";

            // userCategories
            if (curState.tagToUpdate.userCategories === undefined) {
                userCategoriesArray = new Array(curState.chosenCategory);
            } else {
                curState.tagToUpdate.userCategories.push(curState.chosenCategory);
                userCategoriesArray = curState.tagToUpdate.userCategories;
            }

            // usersTagged
            if (curState.tagToUpdate.usersTagged === undefined) {
                usersTaggedArray = new Array(user);
            } else {
                curState.tagToUpdate.usersTagged.push(user);
                usersTaggedArray = curState.tagToUpdate.usersTagged;
            }

            if (userCategoriesArray.length === 1) {
                updatedChosenCategory = userCategoriesArray[0];
                // setChosenCategory(userCategoriesArray[0])
            } else if (userCategoriesArray.length === 2) {
                if (userCategoriesArray[0] !== userCategoriesArray[1]) {
                    // Decision state
                    updatedTagOptions = [userCategoriesArray[0], userCategoriesArray[1]]
                    updatedChosenCategory = userCategoriesArray[1];
                    // setChosenCategory(userCategoriesArray[1]);
                } else {
                    // Agrees
                    dataTagged = true;
                }
            } else {
                dataTagged = true;
                updatedChosenCategory = userCategoriesArray[2];
                // setChosenCategory(userCategoriesArray[2]);
            }

            // userCategoriesArray is undefined
            editedTag = {
                id: curState.tagToUpdate.id,
                date: curState.tagToUpdate.date,
                description: curState.tagToUpdate.description,
                balance: curState.tagToUpdate.balance,
                transactionValue: curState.tagToUpdate.transactionValue,
                category: updatedChosenCategory,
                usersTagged: usersTaggedArray,
                userCategories: userCategoriesArray,
                tagged: dataTagged
            };
            await fetch(`http://localhost:${PORT}/update/${curState.tagToUpdate.id}/`, {
                method: "POST",
                body: JSON.stringify(editedTag),
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            return {
                ...curState,
                visibleOptions: updatedTagOptions,
            }
        },
        getOneTag: (curState, PORT) => {

            async function fetchData() {
                const response = await fetch(`http://localhost:${PORT}/tag/one`);

                if (!response.ok) {
                    const message = `An error occurred: ${response.statusText}`;
                    window.alert(message);
                    return;
                }

                const tag = await response.json();
                console.log(tag);

                // console.log(updatedTagToUpdate);
                // console.log(curState.tagToUpdate);
            }
            fetchData();
            
            // async function updateIt() {
            //     const tagToUpdate = await fetchData();
            //     console.log("There");
            //     console.log(tagToUpdate);
                
            //     return {
            //         ...curState,
            //         visibleOptions: ["Joke", "On", "You"],
            //         // tagToUpdate: updatedTagToUpdate,
            //     }
            // }

            // updateIt();
        },
        setChosenCategory: (curState, category) => {
            return {
                ...curState,
                chosenCategory: category,
            }
        }
    };
    initStore(actions, {
        visibleOptions: [],
        chosenCategory: "",
        query: "",
        tagToUpdate: {},
        tagOptions: [
            "Income",
            "Salary/Wages",
            "Investment",
            "Returned Purchase",
            "Bonus",
            "Interest Income",
            "Reimbursement",
            "Rental Income",
            "Cash", "Check",
            "Arts", "Music",
            "Dating",
            "Movies & DVDs",
            "Newspaper & Magazines",
            "Social Club",
            "Sport",
            "Games",
            "TV",
            "Tuition",
            "Student Loan",
            "Books & Supplies",
            "General Shopping",
            "Department Store",
            "Clothing",
            "Home",
            "Books",
            "Electronics & Software",
            "Hobbies",
            "Sporting Goods",
            "Hair",
            "Laundry",
            "Beauty",
            "Spa & Massage",
            "Dentist",
            "Doctor",
            "Eye care",
            "Pharmacy",
            "Gym",
            "Pets",
            "Sports",
            "Gift",
            "Charity",
            "Equities",
            "Bonds",
            "Bank products",
            "Retirement",
            "Annuities",
            "Real-estate",
            "Television",
            "Home Phone",
            "Internet",
            "Mobile Phone",
            "Utility Bill",
            "Car Insurance",
            "Car Payment",
            "Parking",
            "Public transport",
            "Service & Repairs",
            "Taxi", "Fuel",
            "Air Travel",
            "Hotel",
            "Rental Car",
            "Vacation",
            "Service Fee",
            "Late Fee",
            "Finance Charge",
            "ATM Fee",
            "Bank Fee",
            "Commissions",
            "Advertising",
            "Office Supplies",
            "Printing",
            "Shipping",
            "Legal",
            "Advisory and Consulting",
            "Financial Services",
            "Lawyer",
            "Tax",
            "Betting",
            "Lottery",
            "Casino",
            "Rent",
            "Mortgage",
            "Secured loans",
            "Property taxes",
            "Repairs & Maintenance",
            "Pension payments",
            "Long Term insurance",
            "Short term insurance",
            "Insurance (short/long)",
            "Health insurance"
        ]
    })
}

export default configureStore;