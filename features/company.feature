Feature: Company

  As a tester
  I want to company function works properly

  @watch
  Scenario: Successfully get company listing
    When  I visit "https://52.45.101.25"
	And  I login with "operr" "123456"
	And  I click Parner -> Company
	Then I should see company list
	
 @watch
  Scenario: Successfully add a new company
	When I add new company "ABC"
	Then I should see company list
	
 @watch
  Scenario: Search company listing with automatically return search content
	When I search company "ABC"
	Then Search "ABC" should be working properly
	
 @ignore
  Scenario: Search company listing with clicking search button
	When I search company "ABC" by clicking search button
	Then Search "ABC" should be working properly
	
  @watch
  Scenario: Successfully edit company info
    When I click edit button of first company
	Then I logout