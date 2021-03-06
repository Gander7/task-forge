<p align="center">

<a href="https://travis-ci.org/Gander7/task-forge.svg?branch=master">
<img alt="Travis (.org) branch" src="https://img.shields.io/travis/Gander7/task-forge/master"></a>

<a href='https://coveralls.io/github/Gander7/task-forge?branch=master'>
<img src='https://coveralls.io/repos/github/Gander7/task-forge/badge.svg?branch=master' alt='Coverage Status' /></a>

<a href='https://github.com/Gander7/task-forge/blob/master/LICENSE'>
<img alt="GitHub" src="https://img.shields.io/github/license/Gander7/task-forge"></a>

</p>

<br/>
<p align="center">
  <a href="https://github.com/Gander7/task-forge" margin="0">
    <img src="res/logo.png" alt="Logo" width="150" height="150">
  </a>

  <h3 align="center">A task/project management CLI tool</h3>
  
  <p align="center">
      <a href="#">Explore the Docs</a>
      ·
      <a href="https://github.com/Gander7/task-forge/issues">Report Bug</a>
      ·
      <a href="https://github.com/Gander7/task-forge/issues">Request Feature</a>

  </p>
</p>

## About

Project is in an infantile state, you may see todos within the project but
I will be using Task Forge for it's own todos once it's in a stable enough state. :)

## Getting Started

### Prerequisites

- Node/NPM

### Installation

There are no official releases at this point, but if you want to play around:

1. Clone repos
2. Navigate to `bin` folder or add to your path
3. run the `tk` command

## Usage

### Simple

```
Commands
    add|a        <text>          ...... add task
    view         <taskId>        ...... view task
    list|l                       ...... view task, default command
    modify|mod|m <taskId> <text> ...... modifies task (overwrites)
    append|app   <taskId> <text> ...... appends text to task
    prepend|pre  <taskId> <text> ...... prepends text to task
    done|d       <taskId>        ...... archives task
    restore|res  <taskId>        ...... restores a completed task
    remove|rem   <taskId>        ...... permanently deletes task
    start        <taskId>        ...... Starts a timer on the task
    stop         <taskId>        ...... Stops the timer on the task


    Global Flags
    -v|--version ...................... show current version
    -h|--help    ...................... show usage
```

### Documentation

// TODO: Documentation, once it surpasses simple usage

## Roadmap

These do not appear in any given order.
They are not prioritized but the next thing on the list is what I'm working on.

- Basic Task Crud
  - [x] Create
  - [x] delete
  - [x] done
  - [x] delete
  - [x] list
  - [x] list done
  - [x] read
  - [x] modify desc
  - [x] restore archived => todo
  - [x] append
  - [x] prepend
- [x] Better Help Menu
- [x] tags
  - [x] add tag with add or modify
  - [x] remove tag with modify
  - [x] list tags used with # of current tasks
- [x] fix bug when add/mod tasks with non-string values
- [x] projects
  - [x] add prj:projectName
  - [x] remove prj with mod (tk mod # prj:)
  - [x] list projects with # of current
  - [x] list projects with # complete
- [x] Start/Stop timers
  - [x] start
  - [x] stop
  - [x] update help
- [x] Move Aggregate information out of db (getProjectList)
- [] list time spent per task on todo, done, project?, tags?
- [] pretty output
- [] priority
  - Started
  - Special +Next tag
  - Rest
- [] aggregate time taken on done tasks
- [] Due dates
- [] Command Help Menus
- [] Focus, only show tasks of project and/or tag
- list (different ways of viewing tasks)
  - [] +tag1 -tag2
  - [] prj:projectName
  - [] active
  - [] blocked
  - [] newest
  - [] next
  - [] oldest
  - [] overdue
  - [] project/no project
- [] bulk edit
  - [] prj:oldName mod prj:newName
- [] Ready status?
- reports (aggregate views, that don't contain the basic columns)
  - tags
  - recurring templates with next occurence
  - projects
  - burndown
  - timesheet?
- export/import/backup?
- notes
- Priority+Backlog, inspired from [Scrum]
- Add [Shields](https://shields.io/) as we go
  - [] Discord
- Integration (Push/Pull) [from github issues](https://help.github.com/en/github/managing-your-work-on-github/about-issues)
- Urgency, inspired from [Task Warrior](https://github.com/GothenburgBitFactory/taskwarrior)
- Sprints option/skin/workflow?
- GTD option/skin/workflow?

## Contributing

Contributing is greatly appreciated.
Please see `CONTRIBUTING` for more information.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements/Inspiration

- Readme inspired by [Best-README-Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)
- Commands inspired by [Task Warrior](https://github.com/GothenburgBitFactory/taskwarrior)
