var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["bootstrap"];

Survey
    .StylesManager
    .applyTheme();

var myCss = {
    matrixdropdown: {
        root: "table table-striped"
    },
    navigationButton: "button btn-sm"
};    


var surveyJSON = {"title":"Delphi Survey Round 1","completedHtmlOnCondition":[{"html":"Thank you"}],"pages":[{"name":"pg1","elements":[{"type":"panel","name":"pg1panel1","state":"expanded"},{"type":"html","name":"question2","html":"\n<p>All the information recorded will be strictly confidential and kept in accordance with the General Data Protection Regulation (Regulation (EU) 2016/679) (GDPR), the Data Protection Act 2018, and will be used only by researchers working within the research team.The gathered data will only be published with guaranteed anonymity, leaving no possible identification of the respondent, since the e-mail address through which you have received the invitation will not be registered. There is no way to relate the codes of the participants in the survey with the answers given. The results will not be analyzed individually, but collectively, along with the answers of each respondent.By clicking 'I agree' below you are indicating that you are at least 18 years old, have read and understood this consent form, and agree to participate in this research study.</p>"},{"type":"radiogroup","name":"pg1q1","title":"Agree","hideNumber":true,"isRequired":true,"choices":[{"value":"No","text":"No"},{"value":"Yes","text":"Yes"}]}],"title":"Delphi Round 1","description":"Welcome to the \"Towards quality requirement in scientific review report\" Delphi study Round 1"},{"name":"pg2","elements":[{"type":"panel","name":"pg2panel2","elements":[{"type":"text","name":"pg2qd1","title":"1. Which country are you located in?","hideNumber":true,"isRequired":true,"size":20},{"type":"text","name":"p2qd2","startWithNewLine":false,"title":"2. Which is/are your current position?","hideNumber":true,"size":20},{"type":"text","name":"p2qd3","startWithNewLine":false,"title":"3. Which is your global research area?","hideNumber":true,"size":20},{"type":"radiogroup","name":"p2qd4","title":"4. Are you an Editor?","hideNumber":true,"isRequired":true,"choices":[{"value":"0","text":"No"},{"value":"1","text":"Yes"}]}],"title":"Demographic question"}],"visibleIf":"{pg1q1} = 'Yes'","title":"Demographic"},{"name":"pg3","elements":[{"type":"panel","name":"pg3panel3","description":"List of the requirement to compose the scientific review report, according to the literature review ( in frequency order).","state":"expanded"},{"type":"matrixdropdown","name":"question4","title":"For each requirement, rates its importance and do modifications whether pertinent.","hideNumber":true,"columns":[{"name":"c1","title":"Enhances Manuscript Quality","cellType":"radiogroup","colCount":0,"choices":[{"value":"1","text":"Required"},{"value":"2","text":"Helpful"},{"value":"3","text":"Not Necessary"}]},{"name":"c2","title":"Assists Editorial Decision","cellType":"radiogroup","choices":[{"value":"1","text":"Required"},{"value":"2","text":"Helpful"},{"value":"3","text":"Not necessary"}]},{"name":"c3","title":"Feel free to do modifications","cellType":"comment","width":"150px","rows":2}],"rows":[{"value":"r1","text":"1. Provides a brief summary of the reviewer's interpretation about the study."},{"value":"r2","text":"2. Identifies both strengths and weaknesses of the study."},{"value":"r3","text":"3. Identifies both major and minor concerns."},{"value":"r4","text":"4. Provides specific suggestions for improvements to the manuscript."},{"value":"r5","text":"5. Is written in a positive and constructive tone."},{"value":"r6","text":"6. Provides comments solely focused to assess the scientific merits of the study."},{"value":"r7","text":"7. Provides a clear explanation of the criticisms and how to resolve them."},{"value":"r8","text":"8. Provides references and citations from the literature to support statements."},{"value":"r9","text":"9. Provides comments to the editors congruent with those provided to the authors."},{"value":"r10","text":"10. Identifies major scientific problems or concerns."},{"value":"r11","text":"11. Provides general comments, both favourable and negative."},{"value":"r12","text":"12. Statement related to the rationale for the recommended disposition (accept, reject, or revise)."},{"value":"r13","text":"13. Provides clear and concise comments."},{"value":"r14","text":"14. Includes detailed recommendation to assist authors in making necessary modifications."},{"value":"r15","text":"15. A balanced feedback with both good and bad points of the manuscript."},{"value":"r16","text":"16. Statement related to the manuscript?s overall contribution to the field."},{"value":"r17","text":"17. Provides examples to highlight the issues."},{"value":"r18","text":"18. Provides honest comments, but at the same time respectful and tactful."},{"value":"r19","text":"19. Suggestions for alternate ways to analyze the data."},{"value":"r20","text":"20. Statement related to the importance of the manuscript."},{"value":"r21","text":"21. Provides the reviewer's signature."},{"value":"r22","text":"22. Includes no personal bias in the review."},{"value":"r23","text":"23. Statement related to the potential relevance of the work."},{"value":"r24","text":"24.  Provides the date of the review."},{"value":"r25","text":"25. Statement related to mention any omissions."},{"value":"r26","text":"26. Statement related to the purpose of the study."},{"value":"r27","text":"27. Provides an opening with the title of the manuscript."},{"value":"r28","text":"28. Provides an overall assessment of the originality of the study."},{"value":"r29","text":"29. Includes a polite appreciation for the submission and recognition of the work."},{"value":"r30","text":"30. Provides consistency between the comments to authors and the recommended disposition."},{"value":"r31","text":"31. Provides clear statement on the appropriateness and priority of research for publication."},{"value":"r32","text":"32. Acknowledgment of individuals who may have assisted in conducting the review."},{"value":"r33","text":"33. Alerts on any ethical concerns (e.g., plagiarism, fraud, unethical research practices)."},{"value":"r34","text":"34. Statement related to the importance of the topic for that journal."},{"value":"r35","text":"35. Suggests other professionals (e.g., statistician) when Identifies areas of the study that the reviewer is unable to adequately assess"},{"value":"r36","text":"36. Indicates whether you would like to review the manuscript again after it has been revised."},{"value":"r37","text":"37. Thanks the editor for the opportunity."},{"value":"r38","text":"38. Suggests a change to a manuscript type that is more appropriate for the content."},{"value":"r39","text":"39. Indicates whether the manuscript is interesting to the readers."},{"value":"r40","text":"40. Highlights the amount of work required before the manuscript may be suitable for publication."},{"value":"r41","text":"41. Introduces individuals whom the Associate Editor might ?nd helpful as a reviewer in the future."}]}],"title":"Survey"}],"triggers":[{"type":"complete","expression":"{pg1q1} = 'No'"}],"showProgressBar":"top"}

function sendDataToServer(survey) {
    survey.sendResult('41ad4457-e6f6-46d7-8e7d-9a420fe421ec');
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer,
    css: myCss
});




    
//$("#surveyElement").Survey({model: survey, css: myCss});    
    
    
/*
function sendDataToServer(survey) {
    survey.sendResult('41ad4457-e6f6-46d7-8e7d-9a420fe421ec');
    var resultAsString = JSON.stringify(survey.data);
    console.log(resultAsString);
    /*
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "delphi_ajax.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("text=" + resultAsString);
    
    
    $.ajax({
        type: 'POST',
	url:  'delphi_ajax.php', 
                data: {
		       type: "save",
                       text: resultAsString
				},
			success: function(resultAsString){
				alert(resultAsString); 
				},
			error: function(){
				alert( "Error" );
				},
			async: false
			});
                        
} 

*/
// window.survey = new Survey.Model(json);

/*
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });
*/

// $("#surveyElement").Survey({model: survey});



/*
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});




$("#surveyElement").Survey({model: survey, css: myCss});

*/