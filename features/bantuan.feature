Feature: Pusat Bantuan Page

  @Splash @PusatBantuan @Positive
  Scenario: Displaying the complaint form when Form Aduan button is clicked

    Given User is on the Pusat Bantuan screen
    When User click on the "Form Aduan" button
    Then User should see the "Form Aduan" Screen 
    When User click on the "Tutup Tab" button
    Then User should see the "Pusat Bantuan" Screen

  @Splash @PusatBantuan @Positive 
  Scenario: Displaying the FAQ Screen when FAQ button is clicked 

    Given User is on the Pusat Bantuan screen
    When User click on the "FAQ" button
    Then User should see the "FAQ" Screen
    When User click on the "Tutup Tab" button
    Then User should see the "Pusat Bantuan" Screen

  @Splash @PusatBantuan @Positive
  Scenario: Displaying INAdigital Linkedin when Linkedin icon is clicked  

    Given User is on the Pusat Bantuan screen
    When User click on the "Linkedin" icon
    Then User should see the "Linkedin" Screen
    When User click on the "Tutup Tab" button
    Then User should see the "Pusat Bantuan" Screen
  
  @Splash @PusatBantuan @Positive
  Scenario: Displaying INAdigital Facebook when Facebook icon is clicked  

    Given User is on the Pusat Bantuan screen
    When User click on the "Facebook" icon
    Then User should see the "Facebook" Screen
    When User click on the "Tutup Tab" button
    Then User should see the "Pusat Bantuan" Screen

  @Splash @PusatBantuan @Positive
  Scenario: Displaying INAdigital Youtube when Youtube icon is clicked  

    Given User is on the Pusat Bantuan screen
    When User click on the "Youtube" icon
    Then User should see the "Youtube" Screen
    When User click on the back button 2 times
    Then User should see the "Pusat Bantuan" Screen


  @Splash @PusatBantuan @Positive
  Scenario: Displaying INAdigital Twitter when Twitter icon is clicked  

    Given User is on the Pusat Bantuan screen
    When User click on the "Twitter" icon
    Then User should see the "Twitter" Screen
    When User click on the "Tutup Tab" button
    Then User should see the "Pusat Bantuan" Screen

  @Splash @PusatBantuan @Positive
  Scenario: Displaying INAdigital Browser when Browser icon is clicked  

    Given User is on the Pusat Bantuan screen
    When User click on the "Browser" icon
    Then User should see the "Browser" Screen
    When User click on the "Tutup Tab" button
    Then User should see the "Pusat Bantuan" Screen