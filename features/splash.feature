Feature: Splash Page

  @Splash @SplashPage @Positive
  Scenario: Launch INApas application and verify splash screen elements 

    Given the application is not running
    When User launch the application
    Then User should see the "Mulai Verifikasi" button
    And User should see the "Aktifkan Perangkat" button
    And User should see the "Bantuan" button
    And User should see the splash screen

  @Splash @SplashPage @Positive 
  Scenario: Validation Mulai Verifikasi Button 

    Given User should see the splash screen
    When User click on the "Mulai Verifikasi" button
    Then User should navigate to the verification screen

  @Splash @SplashPage @Positive
  Scenario: Validation Aktifkan Perangkat Button 

    Given User should see the splash screen
    When User click on the "Aktifkan Perangkat" button
    Then User should navigate to the Aktifkan Perangkat Screen

  @Splash @SplashPage @Positive
  Scenario: Validation Aktifkan Perangkat Button 

    Given User should see the splash screen
    When User click on the "Bantuan" button
    Then User should see the Pusat Bantuan Screen


