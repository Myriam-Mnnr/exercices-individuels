def find_longest(str): 
    spl = str.split(" ") 
    longest = 0 
    i=0 
    while (i < len(spl)): 
        if (len(spl[i]) > longest): 
            longest = len(spl[i])
            
        i=i+1 
    return longest


print(find_longest("ceci est un test du longestwordever")) 