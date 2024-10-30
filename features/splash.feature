Feature: Splash Page

  @Splash @SplashPage @Positive 
  Scenario: Validate Mulai Verifikasi Button 

    Given User on the splash screen
    When User click on the "Mulai Verifikasi" button
    Then User should navigate to the "Verifikasi Data Diri" screen

  @Splash @SplashPage @Positive
  Scenario: Validation Aktifkan Perangkat Button 

    Given User on the splash screen
    When User click on the "Aktifkan Perangkat" button
    Then User should navigate to the "Aktifkan Perangkat" screen

  @Splash @SplashPage @Positive
  Scenario: Validate Pusat Bantuan Button 

    Given User on the splash screen
    When User click on the "Pusat Bantuan" button
    Then User should navigate to the "Pusat Bantuan" screen


