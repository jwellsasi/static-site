import urllib

filelist = []
d = "http://www.valuecityfurniture.com"

fetchcss = urllib.URLopener()
fetchcss.retrieve(d+"/Content/ValueCityMix/styles/styles.css", "public/css/styles.css")
print "css download complete"

fetchjs = urllib.URLopener()
fetchjs.retrieve(d+"/Scripts/ASIMix/vendor/animsition.min.js", "public/js/vendor/animsition.min.js")
print "animsition.min.js download complete"

fetchjs.retrieve(d+"/Scripts/ASIMix/main.js", "public/js/main.js")
print "main.js download complete"

fetchjs.retrieve(d+"/Scripts/ASIMix/vendor/jquery.menu-aim.js", "public/js/vendor/jquery.menu-aim.js")
print "jquery.menu-aim.js download complete"

fetchjs.retrieve(d+"/Scripts/ASIMix/vendor/typeahead.jquery.min.js", "public/js/vendor/typeahead.jquery.min.js")
print "typeahead.jquery.min.js download complete"

fetchjs.retrieve(d+"/Scripts/ASIMix/vendor/typeahead.bundle.min.js", "public/js/vendor/typeahead.bundle.min.js")
print "typeahead.bundle.min.js download complete"

fetchjs.retrieve(d+"/Scripts/ASIMix/vendor/jquery.aim.min.js", "public/js/vendor/jquery.aim.min.js")
print "jquery.aim.min.js download complete"

fetchjs.retrieve(d+"/Scripts/ASIMix/mobile-nav.js", "public/js/mobile-nav.js")
print "mobile-nav.js download complete"

fetchjs.retrieve(d+"/Scripts/ASIMix/vendor/slick.min.js", "public/js/vendor/slick.min.js")
print "slick.min.js download complete"

'''
    <script type="text/javascript" src="/Scripts/ASIMix/vendor/slick.min.js"></script>

'''