# Data Tagger
Tool a startup could use to manually tag categorical data to rapidly improve the classification accuracy of their machine learning models.

# Usage
1. Clone and start applications.
2. Run:
```
git clone https://github.com/Anri-Lombard/Data-Enhancing-Tagger.git
docker-compose up
```


But if you do not have docker installed:
```
cd client
npm i && npm start
cd ../server
npm i && npm start
```

3. Get users to manually tag data.

# How it works
1. Users tag data the AI cannot, if 2 agree then data is tagged.
2. If 2 disagree a final user decides the tag.