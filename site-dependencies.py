import urllib

filelist = []

testfile = urllib.URLopener()
testfile.retrieve("http://www.valuecityfurniture.com/Content/ValueCityMix/styles/styles.css", 
				  "public/css/styles.css")
print "file download complete!"
