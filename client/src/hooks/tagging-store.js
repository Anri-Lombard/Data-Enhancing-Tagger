import { initStore } from './store';

const configureStore = () => {
    const actions = {
        filter: (curState, keyword) => {
            let updatedVisibleOptions = "";

            if (keyword !== '') {
                const results = curState.tagOptions.filter((option) => {
                    return option.toLowerCase().includes(keyword.toLowerCase());
                });
                updatedVisibleOptions = results
            } else {
                updatedVisibleOptions = curState.tagOptions
            }
            const updatedQuery = keyword;

            return {
                ...curState,
                visibleOptions: updatedVisibleOptions,
                query: updatedQuery,
            }
        },
        updateTag: async (curState, updatedTagOptions) => {
            return {
                ...curState,
                visibleOptions: updatedTagOptions,
            }
        },
        setTagToUpdate: (curState, tag) => {
            return {
                ...curState,
                tagToUpdate: tag
            }
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