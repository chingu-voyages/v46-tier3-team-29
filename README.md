# Project: Racers Run Club

## Project Info

A website for a running club. The website will have a home page, about page, events page, and a contact page. It will be responsive and mobile friendly.

## Project local development

- [Project installation guide](./docs/project_setup.md)

## MVP

1. Main page
2. Creating a user
3. User profile page
4. Adding group events to the main page
5. About us page
6. Ranking page (fastest runners)
7. Responsiveness (mobile friendly)

## Stack

TypeScript, Next, TailwindCSS, Prisma, MongoDB, Bun

## General Agreements

- Weekly Planning Meeting: **Every Monday at 11:30 BST**
- **Daily StandUp in chat (Discord)**. Explain what you have been working on the day before and if you have some questions.
- Ticket Management: GitHub Projects. Ticket naming: PN: Create a Footer, PN-2: Create Header, etc. 'PN' stands for 'Project Name'. For example, if our project is called 'Black Friday', the prefix will be 'BF'.
- **Do your branching ONLY from the develop branch**.

## Workflow

1. Create a new todo in the project board (GitHub Projects) and convert it to an issue.
2. Assign the todo to yourself if you are ready to start working on it.
3. Checkout develop `git checkout develop` (go to the develop branch) and run `git pull`.
4. Create a new branch like this: `git checkout -b issue-<issue-number>/<branch-name>.` Example: `git checkout -b issue-14/update-readme`.
5. Work on your todo. Stage, commit, and push your changes.
6. Create a pull request from your branch back into develop. Write `Closes #<issue-number>` in your pull request’s comments. Example: `Closes #14`.
7. Send a link to your PR to our Discord chat and notify everyone (@Voyager).
8. Merge the pull request if you got an approval.
9. Notify everyone in out team that you have merged the PR so we update the develop branch locally.
   > Remember: After each merged PR (develop got updated) run `git checkout develop`, `git pull`, `git checkout your-branch`, `git merge develop` That way, you are up-to-date with the develop branch and avoid most conflicts.

# voyage-tasks

Your project's `readme` is as important to success as your code. For
this reason you should put as much care into its creation and maintenance
as you would any other component of the application.

If you are unsure of what should go into the `readme` let this article,
written by an experienced Chingu, be your starting point -
[Keys to a well written README](https://tinyurl.com/yk3wubft).

And before we go there's "one more thing"! Once you decide what to include
in your `readme` feel free to replace the text we've provided here.

> Own it & Make it your Own!

## Team Documents

You may find these helpful as you work together to organize your project.

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

Meeting Agenda templates (located in the `/docs` directory in this repo):

- Meeting - Voyage Kickoff --> ./docs/meeting-voyage_kickoff.docx
- Meeting - App Vision & Feature Planning --> ./docs/meeting-vision_and_feature_planning.docx
- Meeting - Sprint Retrospective, Review, and Planning --> ./docs/meeting-sprint_retrospective_review_and_planning.docx
- Meeting - Sprint Open Topic Session --> ./docs/meeting-sprint_open_topic_session.docx
