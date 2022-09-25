# Team-Profile-Generator
 GIVEN a command-line application that accepts user input:

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
-HTML file = done
-Style.css = done

!! WHEN I click on an email address in the HTML
!! THEN my default email program opens and populates the TO field of the email with the address
!! WHEN I click on the GitHub username
!! THEN that GitHub profile opens in a new tab
        -Add link to html for email pop up
        -Add link to github as well as open in second tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
    questions to be asked:
        -Team managers name -done
        -employee id -done
         -email address -done
        -office # -done

!! WHEN I enter the team manager’s name, employee ID, email address, and office number
!! THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
        -Give Menu for:
        -Engineer
            !! WHEN I select the engineer option
            !! THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
                    PROMPT
                    -Name
                    -ID
                    -Email
                    -Github username
                    back to menu = choosing Engineer, Intern or Finish building my team
        -Intern or
            !! WHEN I select the intern option
            !! THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
                        PROMPT
                        -Name
                        -ID
                        -Email
                        -school
                        back to menu = choosing Engineer, Intern or Finish building my team   
        -Finish building my team 


WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated