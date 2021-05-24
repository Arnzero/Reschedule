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