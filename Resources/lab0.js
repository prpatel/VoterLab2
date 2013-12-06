var containerView = Ti.UI.createView({
	layout: 'vertical'
});
// Create a Button.
var ChangeButton = Ti.UI.createButton({
	title : 'This is a real button',
	color: 'green',
	
});
// Listen for click events.
ChangeButton.addEventListener('click', function() {
	//alert('\'ChangeButton\' was clicked!');
	ChangeLabel.text = 'you clicked me!';
	
});
// Add to the parent view.
Ti.UI.currentWindow.add(ChangeButton);


// Create a Label.
var ChangeLabel = Ti.UI.createLabel({
	text : 'ChangeLabel',
	color : 'yellow',
	textAlign : 'center',
});

// Add to the parent view.
Ti.UI.currentWindow.add(containerView);
containerView.add(ChangeButton);
containerView.add(ChangeLabel);
