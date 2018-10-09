# Useful Git commands

<!-- TOC -->

- [Useful Git commands](#useful-git-commands)
  - [Add a new repo from your machine to GitHub](#add-a-new-repo-from-your-machine-to-github)
  - [Latest changes from repo to your machine](#latest-changes-from-repo-to-your-machine)
  - [Add tracking information to your work](#add-tracking-information-to-your-work)
  - [What branch](#what-branch)
  - [Create a local branch and push it to GitHub](#create-a-local-branch-and-push-it-to-github)
  - [Create a PR [Pull Request]](#create-a-pr-pull-request)
  - [Check remotes](#check-remotes)
  - [Sync a remote fork on your machine](#sync-a-remote-fork-on-your-machine)
  - [Sync a remote fork on Github](#sync-a-remote-fork-on-github)
  - [2fa](#2fa)
  - [Change `origin` url](#change-origin-url)
  - [Add code on your machine to new repo](#add-code-on-your-machine-to-new-repo)
  - [Delete branches](#delete-branches)
  - [Merge master branch into feature branch](#merge-master-branch-into-feature-branch)
  - [Merge two repos](#merge-two-repos)
  - [Stop tracking a file](#stop-tracking-a-file)
  - [Stop tracking a previously tracked folder](#stop-tracking-a-previously-tracked-folder)
  - [Start tracking a previously un-tracked file](#start-tracking-a-previously-un-tracked-file)
  - [Cloning a repo from someone else's GitHub and pushing it to a repo on my GitHub](#cloning-a-repo-from-someone-elses-github-and-pushing-it-to-a-repo-on-my-github)
  - [Remove an `upstream` repository](#remove-an-upstream-repository)
  - [Clone a repo and give it a different name](#clone-a-repo-and-give-it-a-different-name)
  - [Using Husky?](#using-husky)
  - [How to read last commit comment?](#how-to-read-last-commit-comment)
  - [Remove commit from pull request](#remove-commit-from-pull-request)
  - [Show `.gitconfig` details](#show-gitconfig-details)
  - [If you want to rename a branch while pointed to any branch, do:](#if-you-want-to-rename-a-branch-while-pointed-to-any-branch-do)
  - [Git ref log](#git-ref-log)
  - [Use SSH in place of HTTPS](#use-ssh-in-place-of-https)
  - [How to authenticate with GitHub using SSH](#how-to-authenticate-with-github-using-ssh)
  - [Use multiple SSH keys](#use-multiple-ssh-keys)
  - [Specify multiple users for myself in .gitconfig?](#specify-multiple-users-for-myself-in-gitconfig)
  - [Cant remember what your last git commit said?](#cant-remember-what-your-last-git-commit-said)
  - [Rebase changes](#rebase-changes)

<!-- /TOC -->

This is just stuff that I have put down that I find I use a lot of the
time for my own reference.

## Add a new repo from your machine to GitHub

```sh
echo "# name-of-your-awesome-repo" >> README.md # add repo name to README.md
git init # init the repository
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/spences10/name-of-your-awesome-repo.git
git push -u origin master
```

The first four commands can be ignored if you have done more work on
the repo than adding a README.md

## Latest changes from repo to your machine

```sh
git pull
```

## Add tracking information to your work

Assuming that you are working on the master branch then

```sh
git branch --set-upstream-to=origin/master
```

You can set it to whatever branch you want to track changes for

```sh
git branch --set-upstream-to=origin/<branch>
```

This will mean you can just do `git pull` and the latest changes will
be pulled to your `origin`

## What branch

```sh
git branch # shows what branch you're on
git branch -r # shows remote branches
git branch -a # shows all branches
```

## Create a local branch and push it to GitHub

Want to make your feature branch and get it on GitHub?

Make your branch first then:

```sh
git push --set-upstream origin <branch-you-just-created>
```

## Create a PR [Pull Request]

Fork other users repo in GitHub, then clone to your machine.

```sh
git clone https://github.com/YourUserName/awesome-awesome-repo
```

Add the remote repo:

```sh
git remote add upstream https://github.com/OtherUserName/awesome-awesome-repo
```

Create your branch:

```sh
git branch your-awesome-branch
```

Check it out:

```sh
git checkout your-awesome-branch
```

If adding a folder use.

```sh
git add nameOfFolder/\\*
```

Make your commit and push to your new branch.

```sh
git add .
git commit -m 'initial commit'
git push origin your-awesome-branch
```

Manage the rest of the PR via GitHub

## Check remotes

```sh
git remote -v
```

## Sync a remote fork on your machine

First configure the local to point to the remote upstream

```sh
git remote -v
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
git remote -v
git fetch upstream
git checkout master
git merge upstream/master
```

You then use `git merge` to update any branch on the upstream
repository:

```sh
git merge upstream/dev
```

Take a look at [syncing a fork] for more details.

## Sync a remote fork on Github

1.  Open your fork on GitHub.
1.  Click on Pull Requests.
1.  Click on New Pull Request. By default, GitHub will compare the
    original with your fork, and there shouldn't be anything to
    compare if you didn't make any changes.
1.  Click on Try `switching the base`. Now GitHub will compare your
    fork with the original, and you should see all the latest changes.
1.  Click on Click to create a pull request for this comparison and
    assign a predictable name to your pull request (e.g., Update from
    original).
1.  Click on Send pull request.
1.  Scroll down and click Merge pull request and finally Confirm
    merge. If your fork didn't have any changes, you will be able to
    merge it automatically.

## 2fa

Using two factor authentication? Then use the following so you're not
adding in your auth token each time you want to `push` your code.

```sh
git remote set-url origin https://yourgithubuser:your-token@github.com/yourgithubuser/yourrepo.git
```

## Change `origin` url

If you want to change the origin url you can use the `set-url` command

```sh
git remote set-url origin https://github.com/user/new-repo-name
```

## Add code on your machine to new repo

Via terminal navigate to your code folder.

```sh
git init
```

Add your files.

```sh
git add .
```

Adding a folder use the following syntax or it'll get added as a BLOB.

```sh
git add nameOfFolder/\\*
```

Commit to local repo.

```sh
git commit -m 'some detailed message'
```

To add your files to the remote repo,
[first add your remote repo](https://help.github.com/articles/adding-a-remote/)

```sh
git remote add origin [remote repository URL] # Sets the new remote
git remote -v # Verifies the new remote URL
git push origin master
```

For more info check out: [adding an existing project to github using
the command line]

## Delete branches

Delete local branch.

```sh
git branch -D branch-name
```

Remove local branches that are not on the `remote`.

```sh
git remote prune origin
```

Remove local branches that were created from remote branches.

```sh
git branch --merged master | grep -v '^[ *]*master$' | xargs git branch -d
```

## Merge master branch into feature branch

How to merge the master branch into the feature branch? This will come
up often if you are workingon a team with other devs and you want to
update your feature branch to include the latest changes.

```sh
# checkout your feature branch
git checkout feature1
# merge master into it
git merge master
```

## Merge two repos

If you want to merge project-a into project-b:

```sh
cd path/to/project-b
git remote add project-a path/to/project-a
git fetch project-a
git merge --allow-unrelated-histories project-a/master # or whichever branch you want to merge
git remote remove project-a
```

## Stop tracking a file

If you have `.env` files that are tracked by Git and want to ignore
them so your API keys don't get added to GitHub use:

```sh
git update-index --assume-unchanged <file>
```

## Stop tracking a previously tracked folder

First add the folder to your `.gitignore` then remove the folder from
your local git tracking with:

```sh
git rm -r --cached <folder>
```

## Start tracking a previously un-tracked file

```sh
git update-index --no-assume-unchanged <file>
```

## Cloning a repo from someone else's GitHub and pushing it to a repo on my GitHub

So you make a clone, make some changes then realise that you need to
add it to your GitHub account before making a pull

```sh
git remote -v
origin  https://github.com/OtherUser/OtherUserRepo (fetch)
origin  https://github.com/OtherUser/OtherUserRepo (push)
```

You just need to set the `origin` to yours then add the `upstream` as
the original `origin` make sense?

So change `origin` to yours:

```sh
git remote set-url origin http://github.com/YourUser/YourRepo
```

Then add `upsrtream` as theirs:

```sh
git remote add upstream https://github.com/OtherUser/OtherUserRepo
```

Now it should look something like this:

```sh
git remote -v
origin  http://github.com/YourUser/YourRepo (fetch)
origin  http://github.com/YourUser/YourRepo (push)
upstream        https://github.com/OtherUser/OtherUserRepo (fetch)
upstream        https://github.com/OtherUser/OtherUserRepo (push)
```

## Remove an `upstream` repository

If you no longer need a reference to a forked repository then remove
it with the following:

```sh
git remote rm upstream
```

## Clone a repo and give it a different name

```sh
git clone https://github.com/user/repoNameYouToChange NameYouWantToGiveToRepo
```

## Using Husky?

If you are pushing right after a commit, you can use
`git push --no-verify` to avoid running all the tests again.

If you make a trivial change and want to commit
`git commit -m 'some detailed message' --no-verify` will skip your
`precommit` and `prepush` scripts.

## How to read last commit comment?

```sh
git show # is the fastest to type, but shows you the diff as well.
git log -1 # is fast and simple.
git log -1 --pretty=%B # if you need just the commit message and nothing else.
```

## Remove commit from pull request

Read
[this](http://stackoverflow.com/questions/34519665/how-to-move-head-back-to-a-previous-location-detached-head/34519716#34519716)
for more detail on how to revert.

This was the simplest approach I found:

```sh
# Checkout the desired branch
git checkout <branch>
# Undo the desired commit
git revert <commit>
# Update the remote with the undo of the code
git push origin <branch>
```

Rather than use the last part I unstaged the changes in VSCode which I
think did the same thing.

## Show `.gitconfig` details

```sh
git config --list --show-origin
```

## If you want to rename a branch while pointed to any branch, do:

```sh
git branch -m <oldname> <newname>
```

If you want to rename the current branch, you can do:

```sh
git branch -m <newname>
```

A way to remember this, is `-m` is for "move" (or `mv`), which is how
you rename files.

## Git ref log

Want to know what work you have done on a repo? Use `git reflog` to
displpay all the commits.

```sh
# show all changes for the last 90 days
git reflog show -a
# show changes with a date
git reflog --date=iso
```

https://stackoverflow.com/questions/17369254/is-there-a-way-to-cause-git-reflog-to-show-a-date-alongside-each-entry

## Use SSH in place of HTTPS

Get your SSH set up on your machine and add a key to GitHub, more on
that here:
https://egghead.io/lessons/javascript-how-to-authenticate-with-github-using-ssh

You will then need to pick your **Clone with SSH** option from the
**Clone or download** section on your repo page.

Once you have taken the link from there you will need to set the repo
remote to the SSH URL

```sh
git remote set-url origin git@github.com:username/repo-name-here.git
```

Where username is the `username` of the repo owner and
`repo-name-here` is the name of that user's repository.

## How to authenticate with GitHub using SSH

Check that there are no `rsa` files here before continuing, use (bash
or Git bash if you're on Windows):

```sh
ls -al ~/.ssh
```

If there's nothing there then generate a new keygen with:

```sh
ssh-keygen -t rsa -b 4096 -C your@email.com # add your email address 👍
```

Now using `ls -al ~/.ssh` will show our `id_rsa.pub` file.

Add the SSH key to the SSH agent:

```sh
eval "$(ssh-agent -s)" # for mac and Linux from bash, also from Windows Git Bash
```

```sh
eval `ssh-agent -s` # for Git Bash on Windows
```

Add RSA key to SHH with:

```sh
ssh-add ~/.ssh/id_rsa
```

Copy your key to clipboard with one of the following:

```sh
clip < ~/.ssh/id_rsa.pub # Windows
cat ~/.ssh/id_rsa.pub # Linux
pbcopy < ~/.ssh/id_github.pub # Mac
```

Add a new SSH Key to your GitHub profile from the [settings] page by
clicking the [New SSH key] button and paste in your key. Save it...

[settings]: https://github.com/settings/keys
[new ssh key]: https://github.com/settings/ssh/new

Then authenticate with:

```sh
ssh -T git@github.com
```

If you go back to the GitHub setting page and refresh the key icon
should go from black to green. 🎉

## Use multiple SSH keys

If you have more than one GitHub account or if you have AWS code
commit account then you will need to set up a `config` file, add your
SSH key the same as detailed in
[How to authenticate with GitHub using SSH](#how-to-authenticate-with-github-using-ssh)
and give the key a different name:

```sh
# ls ~/.ssh
~/.ssh/id_rsa_github_1
~/.ssh/id_rsa_github_2
~/.ssh/id_rsa_git_aws
```

You can delete all cached keys before, with:

```sh
ssh-add -D
```

You can check your saved keys, with:

```sh
ssh-add -l
```

Set up the SSH config file, check to see if you haven't got a `config`
file already set up with:

```sh
ls -al ~/.ssh/
```

If you haven't got a `config` file there then:

```sh
cd ~/.ssh/
touch config
```

Use your text editor of choice, in this example we'll use `nano`:

```sh
nano config
```

Add your configuration:

```sh
# github_1 account
Host github.com-github_1
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_github_1

# github_2 account
Host github.com-github_2
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_github_2

# AWS code commit account
Host git-codecommit.*.amazonaws.com
	User AWSUSERNAME
	IdentityFile ~/.ssh/id_rsa_git_aws
```

Clone your repo and modify the config file of the repo as detailed
here:
[Specify multiple users for myself in .gitconfig?](#specify-multiple-users-for-myself-in-gitconfig)

There's a great Gist detailing this
[here](https://gist.github.com/jexchan/2351996) for more detail if
needed.

## Specify multiple users for myself in .gitconfig?

Want to have different git credentials for one specific repository?

You can configure an individual git repo to use a specific user/email
address which overrides the global configuration.

From the root of the repo, run:

```sh
git config user.name 'Your Name'
git config user.email 'your@email.com'
```

Whereas the default user / email is configured in your `~/.gitconfig`

```sh
git config --global user.name 'Your Name'
git config --global user.email 'your@email.com'
```

## Cant remember what your last git commit said?

```sh
git show
```

<!-- Links -->

[syncing a fork]: https://help.github.com/articles/syncing-a-fork/
[adding an existing project to github using the command line]:
  https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/

## Rebase changes

If you're working on a team and there have been changes to the main
branch you want to push your changes to, you can rebase before
submitting a PR.

In this scenario we're going to rebase our `feature` branch off of the
`develop` branch

```sh
# switch from your feature to get latest develop changes
git checkout develop
git pull
# checkout the feature branch and rebase
git checkout feature
git rebase develop
```

Then use the prompts from there in conjunction with your text editor
to add in the changes.

```sh
# add a change
git add
# continue the rebase
git rebase --continue
# have an unrelated change, nothing to correct
git rebase --skip
# oh DERP! Want to start over?
git rebase --abort
```

# Rebase accept incoming in bulk

If you have a large file (like a `package-lock.json`) that you want to
accept all the incoming changes from then.

Whilst you're in rebase you'll need to check out the file from your
incoming branch then add it as the new file.

```bash
# checkout the file
git checkout temp-branch -- package-lock.json
# add the file whilst in rebase
git add package-lock.json
# continue with the things
git rebase --continue
```
