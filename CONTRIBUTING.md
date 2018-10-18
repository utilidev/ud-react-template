# How to contribute

All are welcome to contribute using the following guidelines.

Please be kind and respectful to others.

## How to prepare

* You need a [GitHub account](https://github.com/signup/free)
* Submit an [issue ticket](https://github.com/utilidev/ud-react-template/issues) for your issue if there is no one yet.
	* Describe the issue and include steps to reproduce if it's a bug.
	* Ensure to mention the earliest version that you know is affected.
* If you are able and want to fix this, fork the repository on GitHub.

## Make Changes

* In your forked repository, create an issue branch referencing the issue submitted. (e.g. `is-22`)
	* Usually this is based on the master branch.
	* Create a branch based on master; `git branch
	is-22` then checkout the new branch with `git
	checkout is-22`.  Please avoid working directly on the `master` branch.
* Run Prettier on code with default settings before commiting.
* Your PR should only reference one issue.
* If possible, submit tests to your patch / new feature so it can be tested easily.
* Ensure nothing is broken by running all the tests.

## Submit Changes

* Push your changes to an issue branch (see above) in your fork of the repository.
* Open a pull request to the original repository and choose the right original branch you want to patch.
* If not done in commit messages (which you really should do) please reference and update your issue with the code changes. But _please do not close the issue yourself_.
* Even if you have write access to the repository, do not directly push or merge pull-requests. Let another team member review your pull request and approve.

# Additional Resources

* [General GitHub documentation](http://help.github.com/)
* [GitHub pull request documentation](https://help.github.com/articles/about-pull-requests/)
