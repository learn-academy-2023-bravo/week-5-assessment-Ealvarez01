# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# PSEUDOCODE:

# Given array and variables:
# Input: ['coffee', 'tea', 'juice', 'water', 'soda water'] ("takes in..")

# Input: 'o'
# Output: ['coffee', 'soda water']

# Input: 't'
# Output: ['tea', 'water', 'soda water']

# PROCESS:
# Create/define a method (def) named "words_containing" that takes in an array of given words and a single letter in the parameters named "arrays, letters" and return an array of all the words containing that particular letter.
# Create a new variable for the array named "new_array" to equal an array.
# Since we are comparing whether a word has a specific letter in it, we need to use the dot notation select method (.select) to tell it to find and select a certain letter, then since we will need to get more information passed, we will use the ruby block "do" function to pass more information to the method, and then to determine the output for the value that we want we will use a parameter inside of pikes (||) to target each value and inside of the parameter pikes we will pass in the argument of string because we need to look at each element of the string in the array, and be sure to close the "do" block with an end to contain the logic. 
# Next, we need to use a conditional statement (if) to invoke the string value and evaluate if the element of a string contains or includes certain letters that is given using the dot notation include method (.include) followed by a parameter to pass in the argument of "letters", and it will need to return that string with that letter only. At the end of the conditional statment, we will need to enter and "end" to close the code block.
# Return an "end" to close the method code block.
# We can print (p) out a statement by calling on the original method ('words_containing') together with the given variables passed in parameters (beverages_array, letter_o) and (beverages_array, letter_t) that will output the arrays of words that contain an "o" or "t".

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def words_containing arrays, letters
  new_array = arrays.select do |string|
    if string.include?(letters)
     string
    end
  end
end

p words_containing(beverages_array, letter_o)
p words_containing(beverages_array, letter_t)
# ["coffee", "soda water"]
# ["tea", "water", "soda water"]


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# PSEUDOCODE:

# input: hash with key:value pairs of arrays with string values. 
# output: an array with only values of the strings in alphabetical order

# Given hash:
# Input: { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }("takes in..")

# Output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington']

# PROCESS:
# Create/define a method (def) named "values_sorted" that takes in a hash parameter named "hash" and returns an array with all the hash values at their own index and in alphabetical order.
# Add the code logic between the def and end method (contains the code block). The code logic will reference the hash parameter to invoke the method and to select only the array values/objects with strings in the hash we will need to use the dot notation values method (.values) that returns a new array with only the values from the hash and use the dot notation flatten method (.flatten) to iterate over each array within the hash and extract its elements that returns a new array that is a one-dimension flattening of the hash, and finally use the dot notation sort method (.sort) to compare and sort the elements of the string values automatically in alphabetical order.   
# Finally return/print (p) the method variable name (values_sorted) and call together with the given hash (us_states) to show the calculated data output for only the values in the hash with their own index, placed in alpahbetical order.

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def values_sorted hash
  hash.values.flatten.sort
end

p values_sorted(us_states)
# ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# PSEUDOCODE:

# input: attr_accessor :model, :wheels, :current_speed

# input: 2 wheels
# output: "The Trek bike has 2 wheels"

# input: 0 mph
# output: "and is going 0 mph."

# input: initialize (model, wheels = 2, current speed = 0)

# PROCESS:
# Create a class (class) named "Bike" that is initialized with a model, wheels and current_speed.
# Use the attr_accessor helper method to shorten the code  and make it more efficient which acts as a setter and getter method and takes in multiple arguments that will represent an instance variables.
# Create a method (def) to initialize the class method, add parameters to include the given objects and add the given values to wheels and current_speed. 
# Set the default number of wheels to 2 and set the speed to 0. 
# Then add the class objects instance variables and attributes logic between the def and end method (contains the code block). 
# Create a method (def) named bike_info in the same class that returns a sentence with all the data from the bike object.
# To return a sentence with all the data from the bike object, place the code logic in between the def and end method (contains the code block). The code logic is a string using double quotations and double quotations must be used when calling on an object in order to invoke it. Start the sentence with the given output "The and insert a string interpolation of a hash-tag followed by an open curly brace followed by the instance variable symbol (@) and name, then close with a curly brace ("#{@hash_name}"). This references the object names in the attr_accessor helper method that was created and input the rest of the sentence values after each appropriated object to form a logical sentence.
# To give a value to the instance variable object @model, create an instance of a class variable named "new_model", reference the class name "Bike", followed by dot notation new (.new) which creates an instance of a class and in the parameters we need to pass in the name of the given bike model ('Trek'). 
# Finally return/print (p) the class instance variable (new_model) and call together with the bike_info method to show the data output for all of the code logic. 

class Bike
  attr_accessor :model, :wheels, :current_speed
  def initialize(model, wheels = 2, current_speed = 0)
    @model = model
    @wheels = wheels
    @current_speed = current_speed
  end

  def bike_info
    "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph."
  end

# new_model = Bike.new('Trek')
# p new_model.bike_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# PSEUDOCODE:

# input increase: 10
# output faster: 10

# input increase: 18
# output faster: 28

# input decrease: -5
# output slower: 23

# input decrease: -25
# output slower: 0

# PROCESS:
# Define a method named "pedal_faster" that increases the speed by the given amounts.
# Call on the initialize parameters @current_speed = 0 value to start (get) the speed at zero and then to increase the speed, use math logic to add (+)/increase and equal (=)/set to the speed miles per hour. The increase speed given amounts (10 & 18) needs to be added to the end of the pedal_faster method outside of the bike class end statement so that the math logic can be calculated and return a speed value. 
# Define a method named "brake_decelerate" that decreases the speed by the given amounts but include that the bike cannot have a negative speed.
# Call on the initialize parameters @current_speed to start (get) the previous speed value and then to decrease the speed, use math logic to minus (-)/subtract from the previous speed and use the .max bulit-in method to set the maximum brake value at zero so that any negative speed value will not be returned. Using the .max method will give the @current_speed minus the given mph but at least/max of zero. The brake speed given amounts (5 & 25) needs to be added to the end of the brake_decelerate method outside of the bike class end statement so that the math logic can be calculated and return a speed value.
# Finally return/print (p) the class instance variable (new_model) and call together with the bike_info method created earlier to show the output for each given speed value.  

  def pedal_faster mph
    @current_speed += mph
  end

  def brake_decelerate mph
    @current_speed = [@current_speed - mph, 0].max
  end
end

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

new_model = Bike.new('Trek')
p new_model.bike_info

new_model.pedal_faster(10)
p new_model.bike_info

new_model.pedal_faster(18)
p new_model.bike_info

new_model.brake_decelerate(5)
p new_model.bike_info

new_model.brake_decelerate(25)
p new_model.bike_info
# "The Trek has 2 wheels and is going 10 mph"
# "The Trek has 2 wheels and is going 28 mph"
# "The Trek has 2 wheels and is going 23 mph"
# "The Trek has 2 wheels and is going 0 mph"