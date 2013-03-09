all: runMaster runGh
master: generic master_a
gh: generic gh_a

generic:
	git add *
	git commit -m 'generic update'

master_a:
	git push origin master
gh_a:
	git push origin gh-pages
