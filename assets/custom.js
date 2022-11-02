// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    document.querySelector(".tab_content").hide();
    document.querySelector(".tab_content:first").show();

  /* if in tab mode */
    document.querySelector("ul.tabs li").click(function() {
		
      document.querySelector(".tab_content").hide();
      var activeTab = document.querySelector(this).attr("rel"); 
      document.querySelector("#"+activeTab).fadeIn();		
		
      document.querySelector("ul.tabs li").classList.remove("active");
      document.querySelector(this).classList.add("active");

	  document.querySelector(".tab_drawer_heading").classList.remove("d_active");
	  document.querySelector(".tab_drawer_heading[rel^='"+activeTab+"']").classList.add("d_active");
	  
    });
	/* if in drawer mode */
	document.querySelector(".tab_drawer_heading").click(function() {
      
      document.querySelector(".tab_content").hide();
      var d_activeTab = document.querySelector(this).attr("rel"); 
      document.querySelector("#"+d_activeTab).fadeIn();
	  
	  document.querySelector(".tab_drawer_heading").classList.remove("d_active");
      document.querySelector(this).classList.add("d_active");
	  
	  document.querySelector("ul.tabs li").classList.remove("active");
	  document.querySelector("ul.tabs li[rel^='"+d_activeTab+"']").classList.add("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	document.querySelector('ul.tabs li').last().classList.add("tab_last");
	