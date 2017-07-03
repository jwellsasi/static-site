import urllib

filelist = []

fetchcss = urllib.URLopener()
fetchcss.retrieve("http://www.valuecityfurniture.com/Content/ValueCityMix/styles/styles.css", 
				  "public/css/styles.css")
print "css download complete"

fetchjs = urllib.URLopener()
fetchjs.retrieve("http://www.valuecityfurniture.com/Scripts/ASIMix/vendor/animsition.min.js", 
				  "public/js/vendor/animsition.min.js")
print "animsition.min.js download complete"

fetchjs = urllib.URLopener()
fetchjs.retrieve("http://www.valuecityfurniture.com/Scripts/ASIMix/main.js", 
				  "public/js/main.js")
print "main.js download complete"

fetchjs = urllib.URLopener()
fetchjs.retrieve("http://www.valuecityfurniture.com/Scripts/ASIMix/vendor/jquery.menu-aim.js", 
				  "public/js/vendor/jquery.menu-aim.js")
print "jquery.menu-aim.js download complete"

'''
    <script type="text/javascript" src="/Scripts/ASIMix/vendor/jquery.menu-aim.js"></script>
    <script type="text/javascript" src="/Scripts/ASIMix/vendor/typeahead.jquery.min.js"></script>
    <script type="text/javascript" src="/Scripts/ASIMix/vendor/typeahead.bundle.min.js"></script>
    <script type="text/javascript" src="/Scripts/ASIMix/vendor/jquery.aim.min.js"></script>
    <script type="text/javascript" src="/Scripts/ASIMix/mobile-nav.js"></script>
    <script type="text/javascript" src="/Scripts/ASIMix/vendor/slick.min.js"></script>

'''