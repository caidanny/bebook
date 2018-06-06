Feature: Login to Operr V3

  As a tester
  I want to login function works properly

  @watch
  Scenario: Pop-up remind for keep username and password blank and login
    When  I visit "https://52.45.101.25"
	And  I click login button
	Then I should see validation message for username field

  @watch
  Scenario: Pop-up remind for keep password blank and login
    When  I visit "https://52.45.101.25"
	And I enter username "operr"
	And  I click login button
	Then I should see validation message for password field
	
  @watch
  Scenario: Forgot password
    When  I visit "https://52.45.101.25"
	And I click forgot password link
	Then  I see the title of forgot password page "Reset"
	
  @watch
  Scenario: Admin successfully login
    When  I visit "https://52.45.101.25"
	And  I login with "operr" "123456"
	Then  I see the title of home page "Operr System"
	And I logout
	
  @watch
  Scenario: Driver successfully login
    When  I visit "https://52.45.101.25"
	And  I login with "driver" "123456"
	Then  I see the title of home page "Operr System"
	And I logout
	
  @watch
  Scenario: Customer successfully login
    When  I visit "https://52.45.101.25"
	And  I login with "customer" "123456"
	Then  I see the title of home page "Operr System"
	And I logout