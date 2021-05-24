**Types of Tasks**
- Routine Item takes in:
  - start and end time and day, and task info
  - for common tasks for the week

- Pending Item takes in:
  - edit week and select which hours 
  - task info, unit of; ~~20 mins 40 mins~~ 1 to 12 hours
    - if person were to choose 20 mins misc time, it would be
      - ambigious and add extra work. Is this
      - for the first, second or third of hour?
      - better to make it whole so that smaller misc tasks
      - can jump in!!
  - Can be placed in front or back of queue
  - will fill up slots where slots are designed for misc time

**dive deep**
suppose my clock is 3 hours
I sleep for 1
I eat/clean for 1
I have walk for 20 mins:
task1: walk
task2: misc
task3: misc

giving the user some control of when FREE TIME is free time.

Make a JS function
Make clock:
20, 20, 20
30, 30
60

This is perfect!

**Steps**
Select clock to use
fill in tasks accordingly
select times
Enter
    error: WHAT IF TIME IS already selected?

12pm to 1pm = 12pm to 12:59pm
so that 1pm is still available! use JS date to change.

Gray out boxes where time is filled up!


**Diary**
I am a bit sleepy right now.
I went to sleep an hour later 
than I have the last 2 days 
and now I'm too sleepy.

**Issues**
  How will the logic go for a task misc. misc.
  *full* *half* *third*
  if clock *half* and *task1* = 30 mins
  dynamically fill the hour

  if time passes, push tasks up into history

  - Should user be able to add a task to any day of week?
  - example:
    - should user only want to add hiking on weekends,
      - maybe allow click sun and sat, pick times and add to calender


**days of week selection**
- Ideally I want to have a daily or any day of week checkbox.
  - daily supersedes any day of week OR:
    - MAKE DAILY A RADIO and the days of week a checkbox!

**Bussiness Rules**
- User must remove an obstructing task before adding one? or it can be replaced?

**Bussiness Questions**
Suppose user views "today" should they be allowed to click on a task?
If so, it should allow you to delete, edit.
  what if edit means adding a secondary tab?
    then there is no third clock anymore.
      or we can allow user to change this ?

      what if user has long task and wants to add a middle item?

      break break braek
      lets not worry about that now?

**Options**
GET(show) POST(create) PUT(edit) DELETE(remove)
**Routes**
- index: shows my today
  - show -- displays a selected task
  - edit the selected task
    - **can we add a task or justchange**
  - remove the selected task


**profile**
  - show profile
  - edit profile
  - remove profile( how to approach this)
  - register profile
    - login profile

**Tasks**
- priority tasks index: display priority queue
                          - remove item from queue
                          - view and edit item
  - create and add to queue on top of page
    - notes:
    - index shows all tasks with options{delete, edit, add}
      - edit shows info to change
      - delete will be a button to delete( cannot undo!)
      - show will allow you to see more specific details?(yes important!)
        - isn't this redudant? as it will have {delete,edit} ?
      - add will show us a fresh form
  
**Week**
- week index: shows my week
  - create a new addition to week
  - show -- displays a selected task
    - edit the selected task
    - remove the selected task
  
**current decision**
Options:
  view all with  QUICK Options{delete, edit}
  or
  view all, click one to view more and {delete, edit}

  
- other:
  - where should the stats be added? later feature

- how to ask for donations? is this free? yes! it
- is for my portfolio?

