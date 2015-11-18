# Zoolander

Derek Zoolander's Corporate Style Guide to Help Product Teams Build Ridiculously Good Looking Websites


## Requirements

* Docker Toolbox (Docker Client, Docker Compose)
* VirtualBox

## Start Development

```
git clone  
cd zoolander
docker-compose up
```

## Contributing

These are not exhaustive instructions but here is the gist. (Assumptions: you are running tests and verifying your 
changes in multiple browsers.)

* Fork Zoolander
* Clone your repo
* Create a branch in your repo
* Make your changes
* Commit your changes
* Push branch to your repo
* Create PR from your repo:`branch` to Zoolander:`master`


## Deploy
**Pending**

```
rsync -a docs/_site/ deploy@10.14.209.72:/usr/share/nginx/html/
```
