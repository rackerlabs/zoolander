# Zoolander

Derek Zoolander's Corporate Style Guide to Help Product Teams Build Ridiculously Good Looking Websites


## Requirements

* Docker Toolbox (Docker Client, Docker Compose)
* VirtualBox

## Getting Started (Step by Step)

Once you have Docker Toolbox and VirtualBox, open new terminal and run the following:

```
git clone https://github.com/rackerlabs/zoolander.git
cd zoolander
docker-machine create --driver=virtualbox --virtualbox-cpu-count=2 --virtualbox-memory=2048 default
docker-machine ls # get ip address
eval "$(docker-machine env default)"
docker-compose up -d
docker-compose ps # get generated port for 4000
docker-compose logs
# wait for npm install to complete....
```

You should see this when ready

```
grunt_1  | Running "watch" task
grunt_1  | Waiting...
```

**Why is NPM install so sloooooooooowwwww??**

See: [NPM Issue 8836](https://github.com/npm/npm/issues/8836)


## Restarting Development

```
cd zoolander
docker-machine start default
docker-machine ls
eval "$(docker-machine env default)"
docker-compose up -d
docker-compose ls
docker-compose logs
```

## Contributing

These instructions are not exhaustive but here is the gist. (Assumptions: you are running tests and verifying your
changes in multiple browsers.)

* Fork Zoolander
* Clone your repo
* Create a branch in your repo
* Make your changes
* Commit your changes
* Push branch to your repo
* Create PR from your repo:`branch` to Zoolander:`master`

## Troubleshooting

**NPM in Container is Toooo Slow and I Hate Waiting!**

The second time around `npm install` will only take a minute. However, a minute is a long time! For you speed demons, you can
run a hybrid development environment if you like by running Jekyll Docs in the container and `grunt` and `npm` on the host.

```
docker-compose up -d jekyll
grunt watch
```

**I need to install an NPM package, where do I install it?**

You need to run `npm install` within the container for packages that depend on a compiler.

```
docker exec "<container id?>" npm install <package>
```


## Deploy
**Pending**

```
rsync -a docs/_site/ deploy@10.14.209.72:/usr/share/nginx/html/
```
