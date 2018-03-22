# Useful Git commands

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

```shell
git pull
```

## Add tracking information to your work

Assuming that you are working on the master branch then

```shell
git branch --set-upstream-to=origin/master
```

You can set it to whatever branch you want to track changes for

```shell
git branch --set-upstream-to=origin/<branch>
```

This will mean you can just do `git pull` and the latest changes will
be pulled to your `origin`

## What branch?

```shell
git branch # shows what branch you're on
git branch -r # shows remote branches
git branch -a # shows all branches
```

## Create a local branch and push it to GitHub

Want to make your feature branch and get it on GitHub?

Make your branch first then:

```shell
git push --set-upstream origin <branch-you-just-created>
```

## Create a PR [[Pull Request](https://spences10.github.io/2017/01/05/git-and-github.html)]

Fork other users repo in GitHub, then clone to your machine.

```shell
git clone https://github.com/YourUserName/awesome-awesome-repo
```

Add the remote repo

```shell
git remote add upstream https://github.com/OtherUserName/awesome-awesome-repo
```

Create your branch

```shell
git branch your-awesome-branch
```

Check it out

```shell
git checkout your-awesome-branch
```

If adding a folder use.

```shell
git add nameOfFolder/\\*
```

Make your commit and push to your new branch.

```shell
git add .
git commit -m 'initial commit'
git push origin your-awesome-branch
```

Manage the rest of the PR via GitHub

## Check remotes

```shell
git remote -v
```

## [Sync a remote fork](https://help.github.com/articles/syncing-a-fork/) on your machine

First configure the local to point to the remote upstream

```shell
git remote -v
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
git remote -v
git fetch upstream
git checkout master
git merge upstream/master
```

You then use `git merge` to update any branch on the upstream
repository:

```shell
git merge upstream/dev
```

## Sync a remote fork on Github

1.  Open your fork on GitHub.
1.  Click on Pull Requests.
1.  Click on New Pull Request. By default, GitHub will compare the
    original with your fork, and there shouldn’t be anything to
    compare if you didn’t make any changes.
1.  Click on Try `switching the base`. Now GitHub will compare your
    fork with the original, and you should see all the latest changes.
1.  Click on Click to create a pull request for this comparison and
    assign a predictable name to your pull request (e.g., Update from
    original).
1.  Click on Send pull request.
1.  Scroll down and click Merge pull request and finally Confirm
    merge. If your fork didn’t have any changes, you will be able to
    merge it automatically.

## 2fa

Using two factor authentication? Then use the following so you're not
adding in your auth token each time you want to `push` your code.

```shell
git remote set-url origin https://yourgithubuser:your-token@github.com/yourgithubuser/yourrepo.git
```

## Change `origin` url

If you want to change the origin url you can use the `set-url` command

```shell
git remote set-url origin https://github.com/user/new-repo-name
```

## [Add code on your machine to new repo](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)

Via terminal navigate to your code folder.

```shell
git init
```

Add your files.

```shell
git add .
```

Adding a folder use the following syntax or it'll get added as a BLOB.

```shell
git add nameOfFolder/\\*
```

Commit to local repo.

```shell
git commit -m 'some detailed message'
```

To add your files to the remote repo,
[first add your remote repo](https://help.github.com/articles/adding-a-remote/)

```shell
git remote add origin [remote repository URL] # Sets the new remote
git remote -v # Verifies the new remote URL
git push origin master
```

## Delete branches

Delete local branch.

```shell
git branch -D use-dotenv
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

```shell
cd path/to/project-b
git remote add project-a path/to/project-a
git fetch project-a
git merge --allow-unrelated-histories project-a/master # or whichever branch you want to merge
git remote remove project-a
```

## Stop tracking a file

If you have `.env` files that are tracked by Git and want to ignore
them so your API keys don't get added to GitHub use:

```shell
git update-index --assume-unchanged <file>
```

## Stop tracking a previously tracked folder

First add the folder to your `.gitignore` then remove the folder from
your local git tracking with:

```shell
git rm -r --cached <folder>
```

## Start tracking a previously un-tracked file

```shell
git update-index --no-assume-unchanged <file>
```

## Cloning a repo from someone else's GitHub and pushing it to a repo on my GitHub

So you make a clone, make some changes then realise that you need to
add it to your GitHub account before making a pull

```shell
git remote -v
origin  https://github.com/OtherUser/OtherUserRepo (fetch)
origin  https://github.com/OtherUser/OtherUserRepo (push)
```

You just need to set the `origin` to yours then add the `upstream` as
the original `origin` make sense?

So change `origin` to yours:

```shell
git remote set-url origin http://github.com/YourUser/YourRepo
```

Then add `upsrtream` as theirs:

```shell
git remote add upstream https://github.com/OtherUser/OtherUserRepo
```

Now it should look something like this:

```shell
git remote -v
origin  http://github.com/YourUser/YourRepo (fetch)
origin  http://github.com/YourUser/YourRepo (push)
upstream        https://github.com/OtherUser/OtherUserRepo (fetch)
upstream        https://github.com/OtherUser/OtherUserRepo (push)
```

## Remove an `upstream` repository

If you no longer need a reference to a forked repository then remove
it with the following:

```shell
git remote rm upstream
```

## Clone a repo and give it a different name

```shell
git clone https://github.com/user/repoNameYouToChange NameYouWantToGiveToRepo
```

## Using Husky?

If you are pushing right after a commit, you can use
`git push --no-verify` to avoid running all the tests again.

If you make a trivial change and want to commit
`git commit -m 'some detailed message' --no-verify` will skip your
`precommit` and `prepush` scripts.

## How to read last commit comment?

```shell
git show # is the fastest to type, but shows you the diff as well.
git log -1 # is fast and simple.
git log -1 --pretty=%B # if you need just the commit message and nothing else.
```

## Remove commit from pull request

Read
[this](http://stackoverflow.com/questions/34519665/how-to-move-head-back-to-a-previous-location-detached-head/34519716#34519716)
for more detail on how to revert.

This was the simplest approach I found:

```shell
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

```shell
git config --list --show-origin
```

## If you want to rename a branch while pointed to any branch, do:

```shell
git branch -m <oldname> <newname>
```

If you want to rename the current branch, you can do:

```shell
git branch -m <newname>
```

A way to remember this, is `-m` is for "move" (or `mv`), which is how
you rename files.

## Git ref log

Want to know what work you have done on a repo? Use `git reflog` to
displpay all the commits.

```shell
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

```shell
git remote set-url origin git@github.com:username/repo-name-here.git
```

Where username is the `username` of the repo owner and
`repo-name-here` is the name of that user's repository.

## How to authenticate with GitHub using SSH

Check that there are no `rsa` files here before continuing, use (bash
or Git bash if you're on Windows):

```shell
ls -al ~/.ssh
```

If there's nothing there then generate a new keygen with:

```shell
ssh-keygen -t rsa -b 4096 -C your@email.com # add your email address 👍
```

Now using `ls -al ~/.ssh` will show our `id_rsa.pub` file.

Add the SSH key to the SSH agent:

```shell
eval "$(ssh-agent -s)" # for mac and Linux from bash, also from Windows Git Bash
```

```shell
eval `ssh-agent -s` # for Git Bash on Windows
```

Add RSA key to SHH with:

```shell
ssh-add ~/.ssh/id_rsa
```

Copy your key to clipboard

```shell
clip < ~/.ssh/id_rsa.pub # Windows
```

```shell
cat ~/.ssh/id_rsa.pub # Linux
```

Add a new SSH Key to your GitHub profile from the [settings] page by
clicking the [New SSH key] button and paste in your key. Save it...

[settings]: https://github.com/settings/keys
[new ssh key]: https://github.com/settings/ssh/new

Then authenticate with:

```shell
ssh -T git@github.com
```

If you fo back to the GitHub setting page and refresh the key icon
should go from black to green. 🎉
