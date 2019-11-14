package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	 features = "C:\\Users\\Akil\\eclipse-workspace-naveen\\FreeCrmBDDFramework\\src\\main\\java\\Features\\dealsmap.feature",//The path of the feature files
	 glue={"stepDefinations"},//The path of the step definition files
	 format= {"pretty","html:test-output"}, //To generate different types of reporting
	 monochrome = true,//display the console output in a proper readable format
	 strict = true,//it will check if any step is not defined in step definition file
	 dryRun = false //To check if the mapping is fine or not between the feature files and step definition files
	 )

public class TestRunner {
		
}
