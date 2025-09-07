// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryCards = document.querySelectorAll('.category-card');
const filterBtns = document.querySelectorAll('.filter-btn');

// OSINT Categories Data with complete resources from JSON
const osintCategories = {
    username: {
        title: "أسماء المستخدمين",
        resources: [
            { name: "WhatsMyName", url: "https://whatsmyname.app/", description: "البحث عن أسماء المستخدمين عبر المنصات" },
            { name: "Namechk", url: "https://namechk.com/", description: "فحص توفر أسماء المستخدمين" },
            { name: "NameCheckr", url: "https://www.namecheckr.com/", description: "فحص أسماء المستخدمين" },
            { name: "UserSearch.org", url: "https://usersearch.org/", description: "البحث عن المستخدمين" },
            { name: "Thats Them", url: "https://thatsthem.com/", description: "البحث عن الأشخاص" },
            { name: "Check Usernames", url: "http://checkusernames.com/", description: "فحص أسماء المستخدمين" },
            { name: "NameCheckup", url: "https://namecheckup.com/", description: "فحص توفر الأسماء" },
            { name: "Instant Username Search", url: "https://instantusername.com/", description: "البحث السريع عن أسماء المستخدمين" },
            { name: "Names Directory", url: "https://namesdir.com/", description: "دليل الأسماء" },
            { name: "Github User Search", url: "https://api.github.com/users/", description: "البحث عن مستخدمي GitHub" },
            { name: "Keybase", url: "https://keybase.io/", description: "التحقق من الهوية" },
            { name: "MIT PGP Key Server", url: "http://pgp.mit.edu/", description: "خادم مفاتيح PGP" },
            { name: "Sherlock", url: "https://github.com/sherlock-project/sherlock", description: "أداة البحث الشاملة عن أسماء المستخدمين" },
            { name: "Social Analyzer", url: "https://github.com/qeeqbox/social-analyzer", description: "تحليل الحسابات الاجتماعية" },
            { name: "Username Search", url: "https://usernamesearch.xyz/", description: "البحث المتقدم عن أسماء المستخدمين" },
            { name: "Maigret", url: "https://github.com/soxoj/maigret", description: "جمع معلومات أسماء المستخدمين" },
            { name: "Social Mapper", url: "https://github.com/Greenwolf/social_mapper", description: "ربط الحسابات الاجتماعية" },
            { name: "Nexfil", url: "https://github.com/thewhiteh4t/nexfil", description: "البحث عن الملفات الشخصية" },
            { name: "Blackbird", url: "https://github.com/p1ngul1n0/blackbird", description: "البحث عن أسماء المستخدمين" },
            { name: "Username Anarchy", url: "https://github.com/urbanadventurer/username-anarchy", description: "توليد أسماء المستخدمين المحتملة" }
        ]
    },
    email: {
        title: "عناوين البريد الإلكتروني",
        resources: [
            { name: "ThatsThem", url: "https://thatsthem.com/reverse-email-lookup", description: "البحث العكسي للبريد الإلكتروني" },
            { name: "EPIEOS", url: "https://epieos.com/", description: "البحث عن المعلومات بالبريد الإلكتروني" },
            { name: "Hunter", url: "https://hunter.io/", description: "البحث عن عناوين البريد الإلكتروني" },
            { name: "VoilaNorbert", url: "https://www.voilanorbert.com/", description: "العثور على عناوين البريد الإلكتروني" },
            { name: "GitMails", url: "https://github.com/bigyg1995/GitMails", description: "استخراج البريد الإلكتروني من GitHub" },
            { name: "GHunt", url: "https://github.com/mxrch/GHunt", description: "البحث في حسابات Google" },
            { name: "OSINT Industries", url: "https://osint.industries/", description: "أدوات OSINT متقدمة" },
            { name: "theHarvester", url: "https://github.com/laramies/theHarvester", description: "جمع البريد الإلكتروني من المصادر المفتوحة" },
            { name: "Infoga", url: "https://github.com/m4ll0k/infoga", description: "جمع معلومات البريد الإلكتروني" },
            { name: "Skymem", url: "http://www.skymem.info/", description: "البحث في البريد الإلكتروني" },
            { name: "Toofr", url: "https://www.toofr.com/", description: "أشكال البريد الإلكتروني الشائعة" },
            { name: "Email Permutator", url: "http://metricsparrow.com/toolkit/email-permutator/", description: "مولد أشكال البريد الإلكتروني" },
            { name: "Reacher", url: "https://reacher.email", description: "التحقق من صحة البريد الإلكتروني" },
            { name: "MailScrap", url: "https://mailscrap.com/", description: "التحقق من البريد الإلكتروني" },
            { name: "Email Reputation", url: "https://emailrep.io/", description: "سمعة البريد الإلكتروني" },
            { name: "MailboxValidator", url: "https://www.mailboxvalidator.com/demo", description: "التحقق من صندوق البريد" },
            { name: "Have I been pwned?", url: "https://haveibeenpwned.com/", description: "فحص تسريب البيانات" },
            { name: "Hudson Rock", url: "https://www.hudsonrock.com/threat-intelligence-cybercrime-tools", description: "استخبارات التهديدات" },
            { name: "DeHashed", url: "https://dehashed.com/", description: "قاعدة بيانات التسريبات" },
            { name: "Ashley Madison Emails", url: "https://ashley.cynic.al/", description: "فحص تسريب Ashley Madison" },
            { name: "MxToolbox", url: "http://mxtoolbox.com/", description: "أدوات البريد الإلكتروني" },
            { name: "Phonebook.cz", url: "https://phonebook.cz/", description: "البحث في قواعد البيانات العامة" },
            { name: "Email Checker", url: "https://email-checker.net/", description: "التحقق من صحة البريد الإلكتروني" },
            { name: "Clearbit Connect", url: "https://connect.clearbit.com/", description: "العثور على معلومات الاتصال" },
            { name: "Find That Lead", url: "https://findthatlead.com/", description: "البحث عن عناوين البريد الإلكتروني" },
            { name: "RocketReach", url: "https://rocketreach.co/", description: "البحث عن معلومات الاتصال" },
            { name: "Snov.io", url: "https://snov.io/", description: "العثور والتحقق من البريد الإلكتروني" },
            { name: "EmailHippo", url: "https://www.emailhippo.com/", description: "التحقق من البريد الإلكتروني" },
            { name: "NeverBounce", url: "https://neverbounce.com/", description: "التحقق من قائمة البريد الإلكتروني" },
            { name: "ZeroBounce", url: "https://www.zerobounce.net/", description: "التحقق والتنظيف" }
        ]
    },
    domain: {
        title: "أسماء النطاقات",
        resources: [
            { name: "Domain Dossier", url: "http://centralops.net/co/DomainDossier.aspx", description: "تحليل شامل للنطاقات" },
            { name: "domainIQ", url: "https://www.domainiq.com/", description: "ذكاء النطاقات" },
            { name: "DomainTools Whois", url: "http://whois.domaintools.com/", description: "بيانات Whois للنطاقات" },
            { name: "Whoisology", url: "https://whoisology.com/#advanced", description: "تحليل تاريخ Whois" },
            { name: "Whois ARIN", url: "https://whois.arin.net/ui/advanced.jsp", description: "معلومات شبكة ARIN" },
            { name: "DNSstuff", url: "https://www.dnsstuff.com/freetools", description: "أدوات DNS مجانية" },
            { name: "Robtex", url: "https://www.robtex.com/", description: "تحليل DNS والشبكة" },
            { name: "Domaincrawler.com", url: "http://www.domaincrawler.com/", description: "زاحف النطاقات" },
            { name: "MarkMonitor Whois Search", url: "https://domains.markmonitor.com/whois/", description: "بحث Whois من MarkMonitor" },
            { name: "easyWhois", url: "https://www.easywhois.com/", description: "بحث Whois سهل" },
            { name: "Website Informer", url: "http://website.informer.com/", description: "معلومات المواقع" },
            { name: "Who.is", url: "https://who.is/", description: "بحث Whois" },
            { name: "ViewDNS.info", url: "http://viewdns.info/", description: "أدوات DNS متنوعة" },
            { name: "Daily DNS Changes", url: "http://www.dailychanges.com/", description: "تغييرات DNS اليومية" },
            { name: "IP2WHOIS", url: "https://www.ip2whois.com", description: "معلومات IP و Whois" },
            { name: "SynapsInt", url: "https://synapsint.com", description: "أدوات OSINT متقدمة" },
            { name: "Sublist3r", url: "https://github.com/aboul3la/Sublist3r", description: "اكتشاف النطاقات الفرعية" },
            { name: "Aquatone", url: "https://github.com/michenriksen/aquatone", description: "استطلاع النطاقات الفرعية" },
            { name: "Recon-ng", url: "https://github.com/lanmaster53/recon-ng", description: "إطار عمل الاستطلاع" },
            { name: "DNSRecon", url: "https://github.com/darkoperator/dnsrecon", description: "استطلاع DNS" },
            { name: "Gobuster", url: "https://github.com/OJ/gobuster", description: "أداة Brute Force للنطاقات" },
            { name: "OWASP Maryam", url: "https://github.com/saeeddhqan/Maryam", description: "إطار عمل OSINT" },
            { name: "Shodan", url: "https://www.shodan.io/", description: "محرك بحث للأجهزة المتصلة" },
            { name: "urlscan.io", url: "https://urlscan.io/search/#*", description: "فحص وتحليل المواقع" },
            { name: "Censys", url: "https://censys.io/", description: "محرك بحث للشبكات" },
            { name: "crt.sh", url: "https://crt.sh/?", description: "بحث الشهادات" },
            { name: "Security Trails", url: "https://securitytrails.com/", description: "تاريخ DNS والنطاقات" },
            { name: "DNS Dumpster", url: "https://dnsdumpster.com/", description: "بحث DNS" },
            { name: "BuiltWith", url: "http://builtwith.com/", description: "تقنيات المواقع" },
            { name: "Wappalyzer", url: "https://wappalyzer.com/", description: "تحليل تقنيات المواقع" },
            { name: "Netcraft", url: "http://toolbar.netcraft.com/site_report?url=undefined#last_reboot", description: "تقارير المواقع" },
            { name: "Spyse", url: "https://spyse.com/", description: "استطلاع الإنترنت" },
            { name: "BGP.he.net", url: "https://bgp.he.net/", description: "معلومات BGP والشبكة" },
            { name: "RIPE Stat", url: "https://stat.ripe.net/", description: "إحصائيات الشبكة" },
            { name: "Amass", url: "https://github.com/OWASP/Amass", description: "أداة اكتشاف شاملة" },
            { name: "Subfinder", url: "https://github.com/projectdiscovery/subfinder", description: "اكتشاف النطاقات الفرعية" },
            { name: "Assetfinder", url: "https://github.com/tomnomnom/assetfinder", description: "البحث عن الأصول" },
            { name: "Chaos", url: "https://chaos.projectdiscovery.io/", description: "قاعدة بيانات النطاقات الفرعية" },
            { name: "Certificate Spotter", url: "https://sslmate.com/certspotter/", description: "مراقبة الشهادات" },
            { name: "Findomain", url: "https://github.com/Findomain/Findomain", description: "أسرع أداة للنطاقات الفرعية" }
        ]
    },
    ip: {
        title: "عناوين IP و MAC",
        resources: [
            { name: "Shodan", url: "https://www.shodan.io/", description: "محرك بحث للأجهزة المتصلة" },
            { name: "Censys", url: "https://censys.io/", description: "محرك بحث للشبكات" },
            { name: "AbuseIPDB", url: "https://www.abuseipdb.com/", description: "قاعدة بيانات IP المسيئة" },
            { name: "VirusTotal", url: "https://www.virustotal.com/", description: "فحص الملفات وعناوين IP" },
            { name: "ThreatMiner.org", url: "https://www.threatminer.org/", description: "استخبارات التهديدات" },
            { name: "IPVoid", url: "http://www.ipvoid.com/", description: "فحص سمعة IP" },
            { name: "Robtex", url: "https://www.robtex.com/", description: "معلومات DNS و IP" },
            { name: "IP2Location", url: "https://www.ip2location.com/", description: "تحديد موقع IP" },
            { name: "IPInfo.io", url: "https://ipinfo.io/", description: "معلومات IP" },
            { name: "WhatIsMyIPAddress", url: "https://whatismyipaddress.com/", description: "معلومات عنوان IP" },
            { name: "IP-API", url: "http://ip-api.com/", description: "واجهة برمجة معلومات IP" },
            { name: "GeoIP Lookup", url: "https://geoip-lookup.org/", description: "البحث الجغرافي لـ IP" },
            { name: "DB-IP", url: "https://db-ip.com/", description: "قاعدة بيانات IP" },
            { name: "IPStack", url: "https://ipstack.com/", description: "تحديد موقع IP" },
            { name: "MaxMind GeoIP2", url: "https://www.maxmind.com/", description: "خدمات تحديد المواقع الجغرافية" },
            { name: "IPQualityScore", url: "https://www.ipqualityscore.com/", description: "جودة وسمعة IP" },
            { name: "Greynoise", url: "https://viz.greynoise.io/", description: "ضوضاء الإنترنت" },
            { name: "BinaryEdge", url: "https://www.binaryedge.io/", description: "أمان الإنترنت" },
            { name: "ZoomEye", url: "https://www.zoomeye.org/", description: "محرك بحث الأمان السيبراني" },
            { name: "Onyphe", url: "https://www.onyphe.io/", description: "تجميع البيانات السيبرانية" },
            { name: "Criminalip", url: "https://www.criminalip.io/", description: "استخبارات التهديدات" },
            { name: "Netlas", url: "https://netlas.io/", description: "محرك بحث الشبكة" },
            { name: "FOFA", url: "https://fofa.info/", description: "محرك بحث الأمان السيبراني" },
            { name: "Hunter.how", url: "https://hunter.how/", description: "محرك بحث الإنترنت" }
        ]
    },
    media: {
        title: "الصور والفيديو والمستندات",
        resources: [
            { name: "Google Images", url: "https://images.google.com/", description: "البحث العكسي للصور" },
            { name: "TinEye", url: "https://tineye.com/", description: "البحث العكسي للصور" },
            { name: "Yandex Images", url: "https://yandex.com/images/", description: "البحث في الصور" },
            { name: "Bing Visual Search", url: "https://www.bing.com/visualsearch", description: "البحث البصري" },
            { name: "Reverse Image Search", url: "https://www.reverseimagesearch.org/", description: "البحث العكسي للصور" },
            { name: "Image Identify", url: "https://www.imageidentify.com/", description: "تحديد الصور" },
            { name: "Exif Viewer", url: "http://exif.regex.info/exif.cgi", description: "عرض بيانات EXIF" },
            { name: "Jeffrey's Image Metadata Viewer", url: "http://exif.regex.info/", description: "عارض البيانات الوصفية للصور" },
            { name: "Online EXIF Viewer", url: "https://exifinfo.org/", description: "عارض EXIF أونلاين" },
            { name: "MetaPicz", url: "http://metapicz.com/", description: "استخراج البيانات الوصفية" },
            { name: "InVID Verification Plugin", url: "https://www.invid-project.eu/", description: "التحقق من الفيديوهات" },
            { name: "YouTube DataViewer", url: "https://citizenevidence.amnestyusa.org/", description: "تحليل فيديوهات YouTube" },
            { name: "Forensically", url: "https://29a.ch/photo-forensics/", description: "تحليل الصور الجنائي" },
            { name: "FotoForensics", url: "http://fotoforensics.com/", description: "تحليل الصور" }
        ]
    },
    social: {
        title: "الشبكات الاجتماعية",
        resources: [
            { name: "Social Searcher", url: "https://www.social-searcher.com/", description: "البحث في وسائل التواصل الاجتماعي" },
            { name: "Mention", url: "https://mention.com/", description: "مراقبة الإشارات" },
            { name: "Brand24", url: "https://brand24.com/", description: "مراقبة العلامة التجارية" },
            { name: "Hootsuite Insights", url: "https://hootsuite.com/", description: "تحليلات وسائل التواصل" },
            { name: "Buzzsumo", url: "https://buzzsumo.com/", description: "تحليل المحتوى الشائع" },
            { name: "Twint", url: "https://github.com/twintproject/twint", description: "أداة استخراج بيانات Twitter" },
            { name: "Social Bearing", url: "https://socialbearing.com/", description: "تحليل Twitter" },
            { name: "Tweetdeck", url: "https://tweetdeck.twitter.com/", description: "إدارة Twitter" },
            { name: "Facebook Graph Search", url: "https://www.facebook.com/", description: "البحث في Facebook" },
            { name: "Instagram Location Search", url: "https://www.instagram.com/", description: "البحث بالموقع في Instagram" },
            { name: "LinkedIn Sales Navigator", url: "https://www.linkedin.com/", description: "البحث المتقدم في LinkedIn" },
            { name: "Reddit Search", url: "https://www.reddit.com/search/", description: "البحث في Reddit" },
            { name: "YouTube Search", url: "https://www.youtube.com/", description: "البحث في YouTube" },
            { name: "TikTok Search", url: "https://www.tiktok.com/", description: "البحث في TikTok" },
            { name: "Pipl", url: "https://pipl.com/", description: "بحث شامل عن الأشخاص" },
            { name: "Social Catfish", url: "https://socialcatfish.com/", description: "البحث العكسي في وسائل التواصل" },
            { name: "Spokeo", url: "https://www.spokeo.com/", description: "البحث عن الأشخاص" },
            { name: "BeenVerified", url: "https://www.beenverified.com/", description: "التحقق من الهوية" },
            { name: "TruthFinder", url: "https://www.truthfinder.com/", description: "البحث عن الخلفية" },
            { name: "InstantCheckmate", url: "https://www.instantcheckmate.com/", description: "فحص الخلفية الفوري" },
            { name: "WhitePages", url: "https://www.whitepages.com/", description: "دليل الهواتف" },
            { name: "Intelius", url: "https://www.intelius.com/", description: "تقارير الأشخاص" },
            { name: "PeopleFinder", url: "https://www.peoplefinder.com/", description: "محرك بحث الأشخاص" }
        ]
    },
    geolocation: {
        title: "أدوات الموقع الجغرافي والخرائط",
        resources: [
            { name: "Google Earth", url: "https://earth.google.com/", description: "صور الأقمار الصناعية" },
            { name: "Google Maps", url: "https://maps.google.com/", description: "الخرائط والملاحة" },
            { name: "Bing Maps", url: "https://www.bing.com/maps", description: "خرائط Microsoft" },
            { name: "Wikimapia", url: "https://wikimapia.org/", description: "خرائط تفاعلية" },
            { name: "OpenStreetMap", url: "https://www.openstreetmap.org/", description: "خرائط مفتوحة المصدر" },
            { name: "SunCalc", url: "https://suncalc.org/", description: "حساب موقع الشمس والظلال" },
            { name: "What3Words", url: "https://what3words.com/", description: "نظام العناوين بثلاث كلمات" },
            { name: "GeoNames", url: "http://www.geonames.org/", description: "قاعدة بيانات جغرافية" },
            { name: "GPS Coordinates", url: "https://www.gps-coordinates.net/", description: "إحداثيات GPS" },
            { name: "LatLong.net", url: "https://www.latlong.net/", description: "إيجاد الإحداثيات" },
            { name: "Geocaching", url: "https://www.geocaching.com/", description: "البحث عن الكنوز الجغرافية" },
            { name: "Overpass Turbo", url: "https://overpass-turbo.eu/", description: "استعلام بيانات OpenStreetMap" },
            { name: "USGS Earth Explorer", url: "https://earthexplorer.usgs.gov/", description: "مستكشف الأرض" },
            { name: "NASA Worldview", url: "https://worldview.earthdata.nasa.gov/", description: "عرض بيانات الأرض من NASA" },
            { name: "Sentinel Hub", url: "https://www.sentinel-hub.com/", description: "صور الأقمار الصناعية" },
            { name: "Planet Labs", url: "https://www.planet.com/", description: "صور الأرض اليومية" },
            { name: "Zoom Earth", url: "https://zoom.earth/", description: "صور الأقمار الصناعية الحية" },
            { name: "EOS LandViewer", url: "https://eos.com/landviewer/", description: "عارض صور الأقمار الصناعية" },
            { name: "Copernicus Browser", url: "https://browser.dataspace.copernicus.eu/", description: "متصفح Copernicus" },
            { name: "Flash Earth", url: "https://www.flashearth.com/", description: "عرض صور متعددة" },
            { name: "QGIS", url: "https://qgis.org/", description: "نظام معلومات جغرافية" },
            { name: "GeoPy", url: "https://geopy.readthedocs.io/", description: "مكتبة Python للجغرافيا" },
            { name: "Nominatim", url: "https://nominatim.org/", description: "خدمة الترميز الجغرافي" }
        ]
    },
    search: {
        title: "محركات البحث",
        resources: [
            { name: "Google", url: "https://www.google.com/", description: "محرك البحث الأشهر" },
            { name: "DuckDuckGo", url: "https://duckduckgo.com/", description: "محرك بحث يحمي الخصوصية" },
            { name: "Yandex", url: "https://yandex.com/", description: "محرك بحث روسي" },
            { name: "Bing", url: "https://www.bing.com/", description: "محرك بحث Microsoft" },
            { name: "StartPage", url: "https://www.startpage.com/", description: "نتائج Google مع الخصوصية" },
            { name: "Searx", url: "https://searx.org/", description: "محرك بحث مفتوح المصدر" },
            { name: "Ecosia", url: "https://www.ecosia.org/", description: "محرك البحث الأخضر" },
            { name: "Baidu", url: "https://www.baidu.com/", description: "محرك بحث صيني" },
            { name: "Yahoo", url: "https://search.yahoo.com/", description: "محرك بحث Yahoo" },
            { name: "Ask.com", url: "https://www.ask.com/", description: "محرك بحث الأسئلة" },
            { name: "Dogpile", url: "https://www.dogpile.com/", description: "محرك بحث متعدد المصادر" },
            { name: "MetaCrawler", url: "https://www.metacrawler.com/", description: "محرك بحث شامل" },
            { name: "Gibiru", url: "https://gibiru.com/", description: "البحث الخاص" },
            { name: "Swisscows", url: "https://swisscows.com/", description: "محرك بحث آمن" }
        ]
    },
    archives: {
        title: "الأرشيف",
        resources: [
            { name: "Wayback Machine", url: "https://web.archive.org/", description: "أرشيف الإنترنت" },
            { name: "Archive.today", url: "https://archive.today/", description: "أرشيف المواقع" },
            { name: "CachedPages", url: "http://cachedpages.com/", description: "الصفحات المحفوظة" },
            { name: "UK Web Archive", url: "https://www.webarchive.org.uk/", description: "أرشيف الويب البريطاني" },
            { name: "Library of Congress", url: "https://www.loc.gov/", description: "مكتبة الكونغرس" },
            { name: "Common Crawl", url: "https://commoncrawl.org/", description: "أرشيف الويب المفتوح" },
            { name: "Memento", url: "http://timetravel.mementoweb.org/", description: "السفر عبر الزمن للمواقع" },
            { name: "PageFreezer", url: "https://www.pagefreezer.com/", description: "حفظ الصفحات" },
            { name: "Screenshots.com", url: "https://www.screenshots.com/", description: "لقطات شاشة للمواقع" },
            { name: "Stillio", url: "https://stillio.com/", description: "لقطات شاشة تلقائية" }
        ]
    },
    crypto: {
        title: "العملات الرقمية",
        resources: [
            { name: "Blockchain.info", url: "https://www.blockchain.com/explorer", description: "مستكشف البيتكوين" },
            { name: "Etherscan", url: "https://etherscan.io/", description: "مستكشف الإيثريوم" },
            { name: "OXT", url: "https://oxt.me/", description: "تحليل معاملات البيتكوين" },
            { name: "Chainalysis", url: "https://www.chainalysis.com/", description: "تحليل البلوك تشين" },
            { name: "Crystal Blockchain", url: "https://crystalblockchain.com/", description: "تحليل البلوك تشين" },
            { name: "BitRef", url: "https://bitref.com/", description: "معلومات عناوين البيتكوين" },
            { name: "BTC.com", url: "https://btc.com/", description: "مستكشف البيتكوين" },
            { name: "Blockchair", url: "https://blockchair.com/", description: "مستكشف متعدد العملات" },
            { name: "WalletExplorer", url: "https://www.walletexplorer.com/", description: "تحليل محافظ البيتكوين" },
            { name: "CoinTracker", url: "https://www.cointracker.io/", description: "تتبع المحافظ" },
            { name: "Elliptic", url: "https://www.elliptic.co/", description: "تحليل البلوك تشين" },
            { name: "TRM Labs", url: "https://www.trmlabs.com/", description: "تحليل المخاطر" }
        ]
    },
    threat: {
        title: "استخبارات التهديدات",
        resources: [
            { name: "VirusTotal", url: "https://www.virustotal.com/", description: "فحص الملفات والمواقع" },
            { name: "Hybrid Analysis", url: "https://www.hybrid-analysis.com/", description: "تحليل البرمجيات الخبيثة" },
            { name: "MISP", url: "https://www.misp-project.org/", description: "منصة مشاركة التهديدات" },
            { name: "AlienVault OTX", url: "https://otx.alienvault.com/", description: "تبادل التهديدات" },
            { name: "ThreatCrowd", url: "https://www.threatcrowd.org/", description: "محرك بحث التهديدات" },
            { name: "Any.run", url: "https://any.run/", description: "تحليل البرمجيات الخبيثة" },
            { name: "Joe Sandbox", url: "https://www.joesandbox.com/", description: "تحليل البرمجيات الخبيثة" },
            { name: "Cuckoo Sandbox", url: "https://cuckoosandbox.org/", description: "تحليل البرمجيات الخبيثة" },
            { name: "YARA Rules", url: "https://virustotal.github.io/yara/", description: "قواعد كشف البرمجيات الخبيثة" },
            { name: "MalShare", url: "https://malshare.com/", description: "مشاركة عينات البرمجيات الخبيثة" },
            { name: "Malware Bazaar", url: "https://bazaar.abuse.ch/", description: "قاعدة بيانات البرمجيات الخبيثة" },
            { name: "URLHaus", url: "https://urlhaus.abuse.ch/", description: "قاعدة بيانات المواقع الخبيثة" },
            { name: "ThreatMiner", url: "https://www.threatminer.org/", description: "استخبارات التهديدات" },
            { name: "IBM X-Force", url: "https://exchange.xforce.ibmcloud.com/", description: "استخبارات التهديدات" },
            { name: "Pulsedive", url: "https://pulsedive.com/", description: "استخبارات التهديدات المجانية" },
            { name: "Recorded Future", url: "https://www.recordedfuture.com/", description: "ذكاء التهديدات" },
            { name: "Shodan InternetDB", url: "https://internetdb.shodan.io/", description: "قاعدة بيانات الإنترنت" },
            { name: "SecurityTrails", url: "https://securitytrails.com/", description: "تاريخ DNS والتهديدات" },
            { name: "URLScan.io", url: "https://urlscan.io/", description: "فحص المواقع" },
            { name: "Inquest Labs", url: "https://labs.inquest.net/", description: "تحليل البرمجيات الخبيثة" },
            { name: "Maltiverse", url: "https://maltiverse.com/", description: "منصة استخبارات التهديدات" },
            { name: "C1fApp", url: "https://www.c1fapp.com/", description: "منصة استخبارات مجانية" },
            { name: "Triage", url: "https://tria.ge/", description: "تحليل البرمجيات الخبيثة" }
        ]
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeCards();
    addInteractiveEffects();
});

// Initialize event listeners
function initializeEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            handleFilter(this.dataset.category);
        });
    });

    // Category cards click handlers
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            handleCategoryClick(this.dataset.category);
        });
    });
}

// Handle search functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    categoryCards.forEach(card => {
        const cardTitle = card.querySelector('h3').textContent.toLowerCase();
        const cardDescription = card.querySelector('p').textContent.toLowerCase();
        
        if (searchTerm === '' || 
            cardTitle.includes(searchTerm) || 
            cardDescription.includes(searchTerm)) {
            card.style.display = 'flex';
            card.classList.remove('hidden');
            // Add highlight animation
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = 'pulse 0.5s ease-in-out';
            }, 10);
        } else {
            card.style.display = 'none';
            card.classList.add('hidden');
        }
    });

    // Show "no results" message if needed
    const visibleCards = Array.from(categoryCards).filter(card => 
        card.style.display !== 'none'
    );
    
    if (visibleCards.length === 0 && searchTerm !== '') {
        showNoResultsMessage();
    } else {
        hideNoResultsMessage();
    }
}

// Handle filter functionality
function handleFilter(category) {
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter cards
    if (category === 'all') {
        categoryCards.forEach(card => {
            card.style.display = 'flex';
            card.classList.remove('hidden');
        });
    } else if (category === 'trending') {
        // Show trending categories (you can define which ones are trending)
        const trendingCategories = ['social', 'search', 'crypto', 'threat'];
        categoryCards.forEach(card => {
            if (trendingCategories.includes(card.dataset.category)) {
                card.style.display = 'flex';
                card.classList.remove('hidden');
                card.classList.add('trending');
            } else {
                card.style.display = 'none';
                card.classList.add('hidden');
            }
        });
    }
}

// Handle category card clicks
function handleCategoryClick(category) {
    const categoryData = osintCategories[category];
    
    if (categoryData) {
        showCategoryModal(categoryData);
    } else {
        // For categories without specific data, show a generic message
        showGenericCategoryInfo(category);
    }
}

// Show category modal with resources
function showCategoryModal(categoryData) {
    // Create modal HTML
    const modalHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>${categoryData.title}</h2>
                    <button class="close-btn" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="resources-grid">
                        ${categoryData.resources.map(resource => `
                            <div class="resource-item">
                                <h4>${resource.name}</h4>
                                <p>${resource.description}</p>
                                <a href="${resource.url}" target="_blank" class="resource-link">
                                    <i class="fas fa-external-link-alt"></i>
                                    زيارة الموقع
                                </a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add modal styles dynamically
    addModalStyles();
    
    // Animate modal in
    setTimeout(() => {
        document.querySelector('.modal-overlay').style.opacity = '1';
        document.querySelector('.modal-content').style.transform = 'translateY(0) scale(1)';
    }, 10);
}

// Show generic category information
function showGenericCategoryInfo(category) {
    const card = document.querySelector(`[data-category="${category}"]`);
    const title = card.querySelector('h3').textContent;
    const description = card.querySelector('p').textContent;
    
    const modalHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <button class="close-btn" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <p>${description}</p>
                    <div class="coming-soon">
                        <i class="fas fa-tools"></i>
                        <h3>قريباً...</h3>
                        <p>سيتم إضافة المصادر والأدوات المتخصصة لهذا القسم قريباً</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    addModalStyles();
    
    setTimeout(() => {
        document.querySelector('.modal-overlay').style.opacity = '1';
        document.querySelector('.modal-content').style.transform = 'translateY(0) scale(1)';
    }, 10);
}

// Close modal
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.style.opacity = '0';
        modal.querySelector('.modal-content').style.transform = 'translateY(-50px) scale(0.9)';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Add modal styles
function addModalStyles() {
    if (!document.querySelector('#modal-styles')) {
        const styles = `
            <style id="modal-styles">
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .modal-content {
                    background: linear-gradient(135deg, var(--bg-card) 0%, var(--bg-hover) 100%);
                    border: 2px solid var(--primary-green);
                    border-radius: 20px;
                    max-width: 800px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    transform: translateY(-50px) scale(0.9);
                    transition: transform 0.3s ease;
                    box-shadow: var(--glow-large);
                }

                .modal-header {
                    padding: 25px;
                    border-bottom: 1px solid var(--primary-green);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .modal-header h2 {
                    color: var(--primary-green);
                    font-size: 1.8rem;
                    margin: 0;
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: var(--text-secondary);
                    font-size: 1.5rem;
                    cursor: pointer;
                    transition: color 0.3s ease;
                }

                .close-btn:hover {
                    color: var(--primary-green);
                }

                .modal-body {
                    padding: 25px;
                }

                .resources-grid {
                    display: grid;
                    gap: 20px;
                }

                .resource-item {
                    background: var(--bg-dark);
                    padding: 20px;
                    border-radius: 15px;
                    border: 1px solid var(--text-muted);
                    transition: all 0.3s ease;
                }

                .resource-item:hover {
                    border-color: var(--primary-green);
                    transform: translateY(-2px);
                    box-shadow: var(--glow-small);
                }

                .resource-item h4 {
                    color: var(--primary-green);
                    margin-bottom: 10px;
                    font-size: 1.2rem;
                }

                .resource-item p {
                    color: var(--text-secondary);
                    margin-bottom: 15px;
                    line-height: 1.5;
                }

                .resource-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: var(--primary-green);
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                }

                .resource-link:hover {
                    color: var(--neon-green);
                    transform: translateX(5px);
                }

                .coming-soon {
                    text-align: center;
                    padding: 40px 20px;
                    color: var(--text-secondary);
                }

                .coming-soon i {
                    font-size: 3rem;
                    color: var(--primary-green);
                    margin-bottom: 20px;
                    animation: iconPulse 2s ease-in-out infinite alternate;
                }

                .coming-soon h3 {
                    color: var(--primary-green);
                    margin-bottom: 15px;
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', styles);
    }
}

// Suggest resource functionality
function suggestResource() {
    alert('شكراً لاهتمامك! ميزة اقتراح المصادر ستكون متاحة قريباً.');
}

// Show no results message
function showNoResultsMessage() {
    if (!document.querySelector('.no-results')) {
        const message = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>لم يتم العثور على نتائج</h3>
                <p>جرب البحث بكلمات مختلفة أو تصفح جميع الفئات</p>
            </div>
        `;
        document.querySelector('.categories-grid').insertAdjacentHTML('afterend', message);
        
        // Add styles for no results message
        const styles = `
            <style>
                .no-results {
                    text-align: center;
                    padding: 60px 20px;
                    color: var(--text-secondary);
                }
                .no-results i {
                    font-size: 3rem;
                    color: var(--primary-green);
                    margin-bottom: 20px;
                    opacity: 0.7;
                }
                .no-results h3 {
                    color: var(--text-primary);
                    margin-bottom: 15px;
                    font-size: 1.5rem;
                }
            </style>
        `;
        if (!document.querySelector('#no-results-styles')) {
            document.head.insertAdjacentHTML('beforeend', styles.replace('<style>', '<style id="no-results-styles">'));
        }
    }
}

// Hide no results message
function hideNoResultsMessage() {
    const noResults = document.querySelector('.no-results');
    if (noResults) {
        noResults.remove();
    }
}

// Initialize cards with hover effects
function initializeCards() {
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Add interactive effects
function addInteractiveEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', createRipple);
    });
}

// Create ripple effect
function createRipple(e) {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const radius = Math.max(rect.width, rect.height);
    const left = e.clientX - rect.left - radius / 2;
    const top = e.clientY - rect.top - radius / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${radius}px;
        height: ${radius}px;
        left: ${left}px;
        top: ${top}px;
        background: rgba(0, 255, 136, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `;
    
    if (!document.querySelector('#ripple-styles')) {
        document.head.insertAdjacentHTML('beforeend', `
            <style id="ripple-styles">
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            </style>
        `);
    }
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for cards
function showLoadingState() {
    categoryCards.forEach(card => {
        card.classList.add('loading');
    });
}

function hideLoadingState() {
    categoryCards.forEach(card => {
        card.classList.remove('loading');
    });
}

// Performance optimization: Debounce search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
const debouncedSearch = debounce(handleSearch, 300);
searchInput.removeEventListener('input', handleSearch);
searchInput.addEventListener('input', debouncedSearch);