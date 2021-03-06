Jmol._isAsync = false;

        // last update 2/18/2014 2:10:06 PM

        var jmolApplet0; // set up in HTML table, below

        // logic is set by indicating order of USE -- default is HTML5 for this test page, though

        var s = document.location.search;

        // Developers: The _debugCode flag is checked in j2s/core/core.z.js, 
        // and, if TRUE, skips loading the core methods, forcing those
        // to be read from their individual directories. Set this
        // true if you want to do some code debugging by inserting
        // System.out.println, document.title, or alert commands
        // anywhere in the Java or Jmol code.

        Jmol._debugCode = (s.indexOf("debugcode") >= 0);

        jmol_isReady = function (applet) {
            Jmol._getElement(applet, "appletdiv").style.border = "1px solid blue"
        }

        var Info = {
            width: 420,
            height: 300,
            debug: false,
            color: "0x000000",
            addSelectionOptions: true,
            use: "HTML5",   // JAVA HTML5 WEBGL are all options
            j2sPath: "https://chemapps.stolaf.edu/jmol/jsmol/j2s", // this needs to point to where the j2s directory is.
            // jarPath: "https://chemapps.stolaf.edu/jmol/jsmol/j2s/java",// this needs to point to where the java directory is.
            // jarFile: "JmolAppletSigned.jar",
            // isSigned: true,
            script: "set zoomlarge false;set antialiasDisplay;load ../../assets/chemicals/236.mol",
            serverURL: "https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
            readyFunction: jmol_isReady,
            disableJ2SLoadMonitor: true,
            disableInitialConsole: true,
            allowJavaScript: true
            // defaultModel: "$dopamine",
            //console: "none", // default will be jmolApplet0_infodiv, but you can designate another div here or "none"
        }

        $(document).ready(function () {
            $("#appdiv").html(Jmol.getAppletHtml("jmolApplet0", Info))
        })
        var lastPrompt = 0;