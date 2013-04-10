$(document).ready(
	function()
	{
		chrome.tabs.query({active : true, currentWindow: true}, function (tabs) 
		{
			$('#url_input').val(tabs[0].url);
		});
		$('#url_input').keyup(
			function()
			{
				$('#input_div').removeClass('error');
			}
		);
		$('#magic').click(
			function()
			{
				var url = $('#url_input').val();
				$('#magic').addClass("disabled");
				$('#input_div').removeClass('error');
				var short_url = $.ajax (
				{
					url: "http://is.gd/create.php",
					type: "GET",
					data: {"format" : "simple", "url" : url},
					async: true,
					success: function(data,status)
					{
						$('#url_input').val(data);
					},
					error: function (XMLHttpRequest, textStatus, errorThrown) 
					{
						$('#input_div').addClass('error');
					}
				});
				$('#magic').removeClass("disabled");
			}
		);
	}
);