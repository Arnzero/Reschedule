**Formula Index**
# B Notes hours split into 20 40 60
# A       # B    # C
#####  B=12 hours * 3 parts
[0-6]    [0-35]  [0-1]
(1-7) x (1-36)  x(1-2)
(days)x (hours) x(am or pm)
# Global 504

#### if GI mod 3 = 0 then :00
#### if GI mod 3 = 1 then :20
#### if GI mod 3 = 2 then :40

# A                 # Global Index      # Global AM/PM
Sunday     -- 1     [0-71]              [0-35] AM, [36-71] PM
Monday     -- 2     [72-143]            [72-107] AM, [108-143] PM
Tuesday    -- 3     [144-215]           [144-179] AM, [180-215] PM
Wednesday  -- 4     [216-287]           [216-251] AM, [252-287] PM
Thursday   -- 5     [288-359]           [288-323] AM, [324-359] PM
Friday     -- 6     [360-431]           [360-395] AM, [396-431] PM
Saturday   -- 7     [432-503] Mod 503   [432-467] AM, [468-503] PM

# special case to wrap saturday and sunday! when number > 503
    Make 2 arrays  suppose we want a hackathon
for  SATURDAY into SUNDAY make 2 arrays
[490-503], [0-20] <- this one is made subtracting **503**>
else make a single array 

Sleep [200-300]
Sleep [300-400]

# B   (hours split into 3 parts)
1:00 AM     -- 1
1:20 AM     -- 2
1:40 AM     -- 3

2:00 AM     -- 4
2:20 AM     -- 5
2:40 AM     -- 6

3:00 AM     -- 7
3:20 AM     -- 8
3:40 AM     -- 9

1:00 PM     -- 36
1:20 PM     -- 37
1:40 PM     -- 38
etc...

### Example 1 [start-end]
**Sleep**: Sunday -- 1:00am to 2:40am should take  6 slots
[0-5]
**Breakfast**: Sunday -- 2:40am to 3:00am should take 
[5-6]
If start not in any previous [start-(end-1)]
Add it!

### Example 2 [start-end]
**Sleep**: Sunday -- 1:00am to 1:20am should take  1 slots
[0-1]
**Breakfast**: Sunday -- 1:40am to 2:00am should  take 
[2-3]
**MISC**: Sunday -- 1:20am to 1:40am
>>>>>>>>> [1-2]
If start not in any previous [start-(end-1)]
Add it!

>>>> Looks good!

