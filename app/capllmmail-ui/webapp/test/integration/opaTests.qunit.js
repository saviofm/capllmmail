sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'capllmmailui/test/integration/FirstJourney',
		'capllmmailui/test/integration/pages/EmployeeList',
		'capllmmailui/test/integration/pages/EmployeeObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeeList, EmployeeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('capllmmailui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeeList: EmployeeList,
					onTheEmployeeObjectPage: EmployeeObjectPage
                }
            },
            opaJourney.run
        );
    }
);