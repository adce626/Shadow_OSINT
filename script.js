// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryCards = document.querySelectorAll('.category-card');
const filterBtns = document.querySelectorAll('.filter-btn');

// OSINT Categories Data - Complete resources from JSON file
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
            { name: "Keybase", url: "https://keybase.io/", description: "التحقق من الهوية والتشفير" },
            { name: "MIT PGP Key Server", url: "http://pgp.mit.edu/", description: "خادم مفاتيح PGP" },
            { name: "Sherlock", url: "https://github.com/sherlock-project/sherlock", description: "أداة البحث الشاملة عن أسماء المستخدمين" },
            { name: "Social Analyzer", url: "https://github.com/qeeqbox/social-analyzer", description: "تحليل الحسابات الاجتماعية" },
            { name: "Maigret", url: "https://github.com/soxoj/maigret", description: "جمع معلومات أسماء المستخدمين" },
            { name: "Blackbird", url: "https://github.com/p1ngul1n0/blackbird", description: "البحث عن أسماء المستخدمين" }
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
            { name: "MxToolbox", url: "http://mxtoolbox.com/", description: "أدوات البريد الإلكتروني" },
            { name: "Phonebook.cz", url: "https://phonebook.cz/", description: "البحث في قواعد البيانات العامة" }
        ]
    },
    domain: {
        title: "أسماء النطاقات",
        resources: [
            { name: "Domain Dossier", url: "http://centralops.net/co/DomainDossier.aspx", description: "تحليل شامل للنطاقات" },
            { name: "DomainTools Whois", url: "http://whois.domaintools.com/", description: "بيانات Whois للنطاقات" },
            { name: "Whoisology", url: "https://whoisology.com/#advanced", description: "تحليل تاريخ Whois" },
            { name: "Whois ARIN", url: "https://whois.arin.net/ui/advanced.jsp", description: "معلومات شبكة ARIN" },
            { name: "DNSstuff", url: "https://www.dnsstuff.com/freetools", description: "أدوات DNS مجانية" },
            { name: "Robtex", url: "https://www.robtex.com/", description: "تحليل DNS والشبكة" },
            { name: "ViewDNS.info", url: "http://viewdns.info/", description: "أدوات DNS متنوعة" },
            { name: "Who.is", url: "https://who.is/", description: "بحث Whois" },
            { name: "SynapsInt", url: "https://synapsint.com", description: "أدوات OSINT متقدمة" },
            { name: "Sublist3r", url: "https://github.com/aboul3la/Sublist3r", description: "اكتشاف النطاقات الفرعية" },
            { name: "Aquatone", url: "https://github.com/michenriksen/aquatone", description: "استطلاع النطاقات الفرعية" },
            { name: "Amass", url: "https://github.com/OWASP/Amass", description: "أداة اكتشاف شاملة" },
            { name: "Subfinder", url: "https://github.com/projectdiscovery/subfinder", description: "اكتشاف النطاقات الفرعية" },
            { name: "Recon-ng", url: "https://github.com/lanmaster53/recon-ng", description: "إطار عمل الاستطلاع" },
            { name: "DNSRecon", url: "https://github.com/darkoperator/dnsrecon", description: "استطلاع DNS" },
            { name: "Shodan", url: "https://www.shodan.io/", description: "محرك بحث للأجهزة المتصلة" },
            { name: "urlscan.io", url: "https://urlscan.io/search/#*", description: "فحص وتحليل المواقع" },
            { name: "Censys", url: "https://censys.io/", description: "محرك بحث للشبكات" },
            { name: "crt.sh", url: "https://crt.sh/?", description: "بحث الشهادات" },
            { name: "Security Trails", url: "https://securitytrails.com/", description: "تاريخ DNS والنطاقات" },
            { name: "DNS Dumpster", url: "https://dnsdumpster.com/", description: "بحث DNS" },
            { name: "BuiltWith", url: "http://builtwith.com/", description: "تقنيات المواقع" },
            { name: "Wappalyzer", url: "https://wappalyzer.com/", description: "تحليل تقنيات المواقع" },
            { name: "DNS Twist", url: "https://github.com/elceef/dnstwist", description: "كشف Typosquatting" },
            { name: "URLCrazy", url: "http://www.morningstarsecurity.com/research/urlcrazy", description: "توليد النطاقات المشابهة" }
        ]
    },
    ip: {
        title: "عناوين IP و MAC",
        resources: [
            { name: "Shodan", url: "https://www.shodan.io/", description: "محرك بحث للأجهزة المتصلة" },
            { name: "Censys", url: "https://censys.io/", description: "محرك بحث للشبكات" },
            { name: "ZoomEye", url: "https://www.zoomeye.org/", description: "محرك بحث الأمان السيبراني" },
            { name: "AbuseIPDB", url: "https://www.abuseipdb.com/", description: "قاعدة بيانات IP المسيئة" },
            { name: "VirusTotal", url: "https://www.virustotal.com/", description: "فحص الملفات وعناوين IP" },
            { name: "MaxMind Demo", url: "https://www.maxmind.com/en/home", description: "تحديد الموقع الجغرافي" },
            { name: "IPLocation.net", url: "https://www.iplocation.net/", description: "البحث عن موقع IP" },
            { name: "DB-IP", url: "https://db-ip.com/", description: "قاعدة بيانات IP" },
            { name: "IP Void", url: "http://www.ipvoid.com/", description: "فحص سمعة IP" },
            { name: "Criminal IP", url: "https://www.criminalip.io/", description: "استخبارات التهديدات" },
            { name: "BinaryEdge", url: "https://www.binaryedge.io/", description: "أمان الإنترنت" },
            { name: "Onyphe", url: "https://www.onyphe.io/", description: "تجميع البيانات السيبرانية" },
            { name: "GreyNoise", url: "https://viz.greynoise.io/", description: "ضوضاء الإنترنت" },
            { name: "IPQualityScore", url: "https://www.ipqualityscore.com/", description: "جودة وسمعة IP" },
            { name: "Hurricane Electric BGP", url: "http://bgp.he.net/", description: "معلومات BGP والشبكة" },
            { name: "Team Cymru IP to ASN", url: "https://asn.cymru.com/", description: "تحويل IP إلى ASN" },
            { name: "Robtex", url: "https://www.robtex.com/", description: "معلومات DNS و IP" },
            { name: "WiGLE", url: "https://wigle.net/", description: "خريطة الشبكات اللاسلكية" },
            { name: "OpenCellid", url: "https://opencellid.org/", description: "قاعدة بيانات أبراج الخلوي" }
        ]
    },
    media: {
        title: "الصور والفيديو والمستندات",
        resources: [
            { name: "Google Images", url: "https://images.google.com/?gws_rd=ssl", description: "البحث العكسي للصور" },
            { name: "TinEye", url: "http://tineye.com/", description: "البحث العكسي للصور" },
            { name: "Yandex Images", url: "https://www.yandex.com/images/", description: "البحث في الصور" },
            { name: "Bing Images", url: "http://www.bing.com/images", description: "البحث المرئي" },
            { name: "PimEyes", url: "https://pimeyes.com/en", description: "محرك بحث الوجوه" },
            { name: "Baidu Images", url: "http://shitu.baidu.com/", description: "البحث في الصور الصينية" },
            { name: "Image Raider", url: "https://www.imageraider.com/", description: "البحث العكسي للصور" },
            { name: "SauceNAO", url: "https://saucenao.com/", description: "البحث عن مصدر الصور" },
            { name: "ExifTool", url: "https://exiftool.org/", description: "استخراج البيانات الوصفية" },
            { name: "FotoForensics", url: "http://fotoforensics.com/", description: "تحليل الصور الجنائي" },
            { name: "Jeffrey's EXIF Viewer", url: "http://exif.regex.info/", description: "عارض البيانات الوصفية للصور" },
            { name: "ImgOps", url: "http://imgops.com/", description: "عمليات متعددة على الصور" },
            { name: "Online OCR", url: "http://www.free-ocr.com/", description: "تحويل الصور إلى نص" },
            { name: "YouTube DataViewer", url: "http://www.amnestyusa.org/citizenevidence/", description: "تحليل فيديوهات YouTube" },
            { name: "InVID Verification", url: "https://www.invid-project.eu/", description: "التحقق من الفيديوهات" },
            { name: "Google Videos", url: "https://www.google.com/videohp?gws_rd=ssl", description: "البحث في الفيديوهات" },
            { name: "Vimeo Search", url: "https://vimeo.com/search?", description: "البحث في Vimeo" },
            { name: "Archive.org Videos", url: "https://archive.org/details/opensource_movies", description: "فيديوهات الأرشيف" },
            { name: "WikiLeaks Search", url: "https://search.wikileaks.org/advanced", description: "البحث في الوثائق المسربة" },
            { name: "Scribd", url: "https://www.scribd.com/", description: "مكتبة المستندات" }
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
            { name: "FB Lookup ID", url: "https://lookup-id.com/", description: "البحث عن معرف Facebook" },
            { name: "Inflact Instagram Viewer", url: "https://inflact.com/profiles/instagram-viewer/", description: "عارض Instagram مجهول" },
            { name: "Twitter Advanced Search", url: "https://twitter.com/search-advanced", description: "البحث المتقدم في Twitter" },
            { name: "Pipl", url: "https://pipl.com/", description: "بحث شامل عن الأشخاص" },
            { name: "Social Catfish", url: "https://socialcatfish.com/", description: "البحث العكسي في وسائل التواصل" },
            { name: "Spokeo", url: "https://www.spokeo.com/", description: "البحث عن الأشخاص" },
            { name: "BeenVerified", url: "https://www.beenverified.com/", description: "التحقق من الهوية" },
            { name: "TruthFinder", url: "https://www.truthfinder.com/", description: "البحث عن الخلفية" },
            { name: "WhitePages", url: "https://www.whitepages.com/", description: "دليل الهواتف" },
            { name: "LinkedIn Sales Navigator", url: "https://www.linkedin.com/", description: "البحث المتقدم في LinkedIn" },
            { name: "Reddit Search", url: "https://www.reddit.com/search/", description: "البحث في Reddit" },
            { name: "YouTube Search", url: "https://www.youtube.com/", description: "البحث في YouTube" },
            { name: "TikTok Search", url: "https://www.tiktok.com/", description: "البحث في TikTok" }
        ]
    },
    messaging: {
        title: "المراسلة الفورية",
        resources: [
            { name: "Telegram Search", url: "https://t.me/", description: "البحث في قنوات Telegram" },
            { name: "WhatsApp Business", url: "https://business.whatsapp.com/", description: "معلومات الأعمال في WhatsApp" },
            { name: "Discord Search", url: "https://discord.com/", description: "البحث في خوادم Discord" },
            { name: "Skype Directory", url: "https://www.skype.com/", description: "دليل مستخدمي Skype" },
            { name: "Signal Info", url: "https://signal.org/", description: "معلومات تطبيق Signal" },
            { name: "Viber Public Chats", url: "https://www.viber.com/", description: "المحادثات العامة في Viber" },
            { name: "WeChat Search", url: "https://weixin.qq.com/", description: "البحث في WeChat" },
            { name: "Kik Username Search", url: "https://kik.me/", description: "البحث عن أسماء مستخدمين Kik" }
        ]
    },
    people: {
        title: "محركات البحث عن الأشخاص",
        resources: [
            { name: "Pipl", url: "https://pipl.com/", description: "بحث شامل عن الأشخاص" },
            { name: "ThatsThem", url: "https://thatsthem.com/", description: "البحث عن الأشخاص" },
            { name: "BeenVerified", url: "https://www.beenverified.com/", description: "التحقق من الهوية" },
            { name: "Spokeo", url: "https://www.spokeo.com/", description: "البحث عن الأشخاص" },
            { name: "TruthFinder", url: "https://www.truthfinder.com/", description: "البحث عن الخلفية" },
            { name: "InstantCheckmate", url: "https://www.instantcheckmate.com/", description: "فحص الخلفية الفوري" },
            { name: "WhitePages", url: "https://www.whitepages.com/", description: "دليل الهواتف" },
            { name: "Intelius", url: "https://www.intelius.com/", description: "تقارير الأشخاص" },
            { name: "PeopleFinder", url: "https://www.peoplefinder.com/", description: "محرك بحث الأشخاص" },
            { name: "FamilyTreeNow", url: "https://www.familytreenow.com/", description: "شجرة العائلة" },
            { name: "VoterRecords", url: "https://voterrecords.com/", description: "سجلات الناخبين" }
        ]
    },
    dating: {
        title: "مواقع المواعدة",
        resources: [
            { name: "Tinder Profile Search", url: "https://www.gotinder.com/", description: "البحث في ملفات Tinder" },
            { name: "Bumble Search", url: "https://bumble.com/", description: "البحث في Bumble" },
            { name: "Match.com Search", url: "https://www.match.com/", description: "البحث في Match.com" },
            { name: "OkCupid Search", url: "https://www.okcupid.com/", description: "البحث في OkCupid" },
            { name: "Badoo Search", url: "https://badoo.com/", description: "البحث في Badoo" },
            { name: "POF Search", url: "https://www.pof.com/", description: "البحث في Plenty of Fish" },
            { name: "eHarmony Search", url: "https://www.eharmony.com/", description: "البحث في eHarmony" }
        ]
    },
    phone: {
        title: "أرقام الهاتف",
        resources: [
            { name: "TrueCaller", url: "https://www.truecaller.com/", description: "تحديد هوية المتصل" },
            { name: "WhitePages", url: "https://www.whitepages.com/", description: "دليل الهواتف" },
            { name: "ThatsThem", url: "https://thatsthem.com/", description: "البحث العكسي للهواتف" },
            { name: "Spokeo", url: "https://www.spokeo.com/", description: "البحث عن الهواتف" },
            { name: "Reverse Phone Lookup", url: "https://www.reversephonelookup.com/", description: "البحث العكسي للهواتف" },
            { name: "Phone Validator", url: "https://www.phonevalidator.com/", description: "التحقق من صحة الهاتف" },
            { name: "NumLookup", url: "https://www.numlookup.com/", description: "البحث عن الأرقام" },
            { name: "CallApp", url: "https://www.callapp.com/", description: "تحديد هوية المتصل" }
        ]
    },
    records: {
        title: "السجلات العامة",
        resources: [
            { name: "Public Records", url: "https://publicrecords.onlinesearches.com/", description: "السجلات العامة" },
            { name: "CourtRecords", url: "https://www.courtrecords.org/", description: "سجلات المحاكم" },
            { name: "VitalRecords", url: "https://www.vitalrecords.com/", description: "السجلات الحيوية" },
            { name: "Property Records", url: "https://www.propertyrecords.com/", description: "سجلات الممتلكات" },
            { name: "Criminal Records", url: "https://www.criminalrecords.com/", description: "السجلات الجنائية" },
            { name: "Marriage Records", url: "https://www.marriagerecords.org/", description: "سجلات الزواج" },
            { name: "Divorce Records", url: "https://www.divorcerecords.org/", description: "سجلات الطلاق" },
            { name: "Death Records", url: "https://www.deathrecords.org/", description: "سجلات الوفاة" }
        ]
    },
    business: {
        title: "السجلات التجارية",
        resources: [
            { name: "OpenCorporates", url: "https://opencorporates.com/", description: "قاعدة بيانات الشركات العالمية" },
            { name: "Crunchbase", url: "https://www.crunchbase.com/", description: "معلومات الشركات والاستثمار" },
            { name: "LinkedIn Company Search", url: "https://www.linkedin.com/", description: "البحث عن الشركات" },
            { name: "Bloomberg", url: "https://www.bloomberg.com/", description: "معلومات الأعمال المالية" },
            { name: "SEC EDGAR", url: "https://www.sec.gov/edgar.shtml", description: "ملفات SEC" },
            { name: "Business Registration", url: "https://www.businessregistration.com/", description: "تسجيل الأعمال" },
            { name: "Better Business Bureau", url: "https://www.bbb.org/", description: "مكتب الأعمال الأفضل" },
            { name: "D&B Hoovers", url: "https://www.dnb.com/", description: "معلومات الشركات" }
        ]
    },
    transport: {
        title: "النقل",
        resources: [
            { name: "FlightRadar24", url: "https://www.flightradar24.com/", description: "تتبع الطائرات" },
            { name: "MarineTraffic", url: "https://www.marinetraffic.com/", description: "تتبع السفن" },
            { name: "VesselFinder", url: "https://www.vesselfinder.com/", description: "العثور على السفن" },
            { name: "PlaneSpotters", url: "https://www.planespotters.net/", description: "قاعدة بيانات الطائرات" },
            { name: "RadarBox", url: "https://www.radarbox.com/", description: "تتبع الطائرات" },
            { name: "Ship Tracker", url: "https://www.shiptracker.live/", description: "تتبع السفن" },
            { name: "N2YO Satellite Tracking", url: "http://www.n2yo.com/", description: "تتبع الأقمار الصناعية" },
            { name: "Transportation Mobility", url: "https://mobility.portal.geops.io/", description: "تتبع النقل والقطارات" }
        ]
    },
    geolocation: {
        title: "أدوات الموقع الجغرافي والخرائط",
        resources: [
            { name: "Google Earth", url: "https://www.google.com/earth/", description: "صور الأقمار الصناعية" },
            { name: "Google Maps", url: "https://www.google.com/maps/", description: "الخرائط والملاحة" },
            { name: "Bing Maps", url: "http://www.bing.com/maps/", description: "خرائط Microsoft" },
            { name: "Wikimapia", url: "http://wikimapia.org/", description: "خرائط تفاعلية" },
            { name: "OpenStreetMap", url: "http://www.openstreetmap.org/", description: "خرائط مفتوحة المصدر" },
            { name: "SunCalc", url: "http://suncalc.net/", description: "حساب موقع الشمس والظلال" },
            { name: "What3Words", url: "https://what3words.com/", description: "نظام العناوين بثلاث كلمات" },
            { name: "GeoNames", url: "http://www.geonames.org/", description: "قاعدة بيانات جغرافية" },
            { name: "GPS Coordinates", url: "https://www.gps-coordinates.net/", description: "إحداثيات GPS" },
            { name: "LatLong.net", url: "https://www.latlong.net/", description: "إيجاد الإحداثيات" },
            { name: "Flash Earth", url: "http://www.flashearth.com/", description: "عرض صور متعددة" },
            { name: "Historic Aerials", url: "http://www.historicaerials.com/", description: "الصور الجوية التاريخية" },
            { name: "Yandex Maps", url: "https://yandex.com/maps/", description: "خرائط يانديكس" },
            { name: "HERE Maps", url: "https://maps.here.com/", description: "خرائط HERE" },
            { name: "EarthExplorer", url: "https://earthexplorer.usgs.gov/", description: "مستكشف الأرض" },
            { name: "Sentinel Hub", url: "https://www.sentinel-hub.com/", description: "صور الأقمار الصناعية" },
            { name: "Planet Labs", url: "https://www.planet.com/", description: "صور الأرض اليومية" },
            { name: "Zoom Earth", url: "https://zoom.earth/", description: "صور الأقمار الصناعية الحية" }
        ]
    },
    search: {
        title: "محركات البحث",
        resources: [
            { name: "Google", url: "https://www.google.com/?gws_rd=ssl", description: "محرك البحث الأشهر" },
            { name: "Google Advanced Search", url: "https://www.google.com/advanced_search", description: "البحث المتقدم في Google" },
            { name: "Bing", url: "http://www.bing.com/", description: "محرك بحث Microsoft" },
            { name: "DuckDuckGo", url: "https://duckduckgo.com/", description: "محرك بحث يحمي الخصوصية" },
            { name: "Yahoo Advanced Search", url: "https://search.yahoo.com/web/advanced", description: "البحث المتقدم في Yahoo" },
            { name: "StartPage", url: "https://www.startpage.com/", description: "نتائج Google مع الخصوصية" },
            { name: "Yandex", url: "https://www.yandex.com/", description: "محرك بحث روسي" },
            { name: "Baidu", url: "http://www.baidu.com/", description: "محرك بحث صيني" },
            { name: "Searx", url: "https://searx.org/", description: "محرك بحث مفتوح المصدر" },
            { name: "Ecosia", url: "https://www.ecosia.org/", description: "محرك البحث الأخضر" },
            { name: "Swisscows", url: "http://swisscows.com/", description: "محرك بحث آمن" },
            { name: "Google Scholar", url: "https://scholar.google.com/", description: "البحث الأكاديمي" },
            { name: "Million Short", url: "https://millionshort.com/", description: "محرك بحث بديل" },
            { name: "PublicWWW", url: "https://publicwww.com/", description: "البحث في أكواد المواقع" },
            { name: "Searchcode", url: "https://searchcode.com/", description: "البحث في الأكواد" },
            { name: "Google Trends", url: "https://trends.google.com/trends/", description: "اتجاهات البحث" },
            { name: "Google Alerts", url: "https://www.google.com/alerts#", description: "تنبيهات Google" }
        ]
    },
    forums: {
        title: "المنتديات والمدونات و IRC",
        resources: [
            { name: "BoardReader", url: "http://boardreader.com/", description: "البحث في المنتديات" },
            { name: "Omgili", url: "http://omgili.com/", description: "البحث في المناقشات" },
            { name: "Google Groups", url: "https://groups.google.com/forum/#!overview", description: "البحث في مجموعات Google" },
            { name: "Reddit Search", url: "https://www.reddit.com/search/", description: "البحث في Reddit" },
            { name: "Topix", url: "http://www.topix.com/search/article?q=", description: "البحث في المواضيع" },
            { name: "Blog Search Engine", url: "http://www.blogsearchengine.org/", description: "محرك بحث المدونات" },
            { name: "Live Journal Seek", url: "http://ljseek.com/", description: "البحث في Live Journal" },
            { name: "Mibbit IRC Search", url: "http://search.mibbit.com/", description: "البحث في IRC" },
            { name: "netsplit.de IRC", url: "http://irc.netsplit.de/channels/search.php", description: "البحث في قنوات IRC" }
        ]
    },
    archives: {
        title: "الأرشيف",
        resources: [
            { name: "Wayback Machine", url: "https://archive.org/web/", description: "أرشيف الإنترنت" },
            { name: "Archive.today", url: "https://archive.is/", description: "أرشيف المواقع" },
            { name: "CachedPages", url: "http://cachedpages.com/", description: "الصفحات المحفوظة" },
            { name: "WebCite", url: "http://webcitation.org/query", description: "أرشيف الويب" },
            { name: "Cached View", url: "http://cachedview.com/", description: "عرض الصفحات المحفوظة" },
            { name: "UK Web Archive", url: "https://www.webarchive.org.uk/", description: "أرشيف الويب البريطاني" },
            { name: "Library of Congress", url: "https://www.loc.gov/", description: "مكتبة الكونغرس" },
            { name: "Common Crawl", url: "https://commoncrawl.org/", description: "أرشيف الويب المفتوح" },
            { name: "Memento", url: "http://timetravel.mementoweb.org/", description: "السفر عبر الزمن للمواقع" },
            { name: "PageFreezer", url: "https://www.pagefreezer.com/", description: "حفظ الصفحات" }
        ]
    },
    translation: {
        title: "الترجمة",
        resources: [
            { name: "Google Translate", url: "https://translate.google.com/", description: "خدمة الترجمة من Google" },
            { name: "Microsoft Translator", url: "https://www.bing.com/translator", description: "مترجم Microsoft" },
            { name: "DeepL", url: "https://www.deepl.com/", description: "الترجمة بالذكاء الاصطناعي" },
            { name: "Yandex Translate", url: "https://translate.yandex.com/", description: "مترجم Yandex" },
            { name: "Papago", url: "https://papago.naver.com/", description: "مترجم Naver" },
            { name: "Baidu Translate", url: "https://fanyi.baidu.com/", description: "مترجم Baidu" },
            { name: "Reverso", url: "https://www.reverso.net/", description: "الترجمة والقاموس" },
            { name: "Linguee", url: "https://www.linguee.com/", description: "قاموس ومترجم" }
        ]
    },
    metadata: {
        title: "البيانات الوصفية",
        resources: [
            { name: "ExifTool", url: "https://exiftool.org/", description: "استخراج البيانات الوصفية" },
            { name: "Jeffrey's EXIF Viewer", url: "http://exif.regex.info/", description: "عارض البيانات الوصفية للصور" },
            { name: "Online EXIF Viewer", url: "https://exifinfo.org/", description: "عارض EXIF أونلاين" },
            { name: "MetaPicz", url: "http://metapicz.com/", description: "استخراج البيانات الوصفية" },
            { name: "ImgOps", url: "http://imgops.com/", description: "عمليات متعددة على الصور" },
            { name: "GeoSetter", url: "http://www.geosetter.de/en/", description: "تحرير البيانات الجغرافية" },
            { name: "xeuledoc", url: "https://github.com/Malfrats/xeuledoc", description: "استخراج البيانات الوصفية من المستندات" }
        ]
    },
    mobile: {
        title: "محاكاة الجوال",
        resources: [
            { name: "BrowserStack", url: "https://www.browserstack.com/", description: "اختبار المواقع على الأجهزة المحمولة" },
            { name: "Mobile Test", url: "http://mobiletest.me/", description: "اختبار الجوال" },
            { name: "Responsinator", url: "http://www.responsinator.com/", description: "اختبار التصميم المتجاوب" },
            { name: "Device Metrics", url: "https://material.io/resources/devices/", description: "مقاييس الأجهزة" },
            { name: "Mobile Emulator", url: "https://www.mobilephoneemulator.com/", description: "محاكي الهاتف المحمول" }
        ]
    },
    terrorism: {
        title: "الإرهاب",
        resources: [
            { name: "START GTD", url: "https://www.start.umd.edu/gtd/", description: "قاعدة بيانات الإرهاب العالمية" },
            { name: "Counter Extremism Project", url: "https://www.counterextremism.com/", description: "مشروع مكافحة التطرف" },
            { name: "SITE Intelligence", url: "https://ent.siteintelgroup.com/", description: "استخبارات SITE" },
            { name: "Terrorism Research", url: "https://www.terrorism-research.com/", description: "بحوث الإرهاب" },
            { name: "UN Counter-Terrorism", url: "https://www.un.org/counterterrorism/", description: "مكافحة الإرهاب الأممية" }
        ]
    },
    darkweb: {
        title: "الويب المظلم",
        resources: [
            { name: "Tor Project", url: "https://www.torproject.org/", description: "مشروع Tor" },
            { name: "DuckDuckGo Onion", url: "https://3g2upl4pq6kufc4m.onion/", description: "DuckDuckGo للويب المظلم" },
            { name: "Hidden Wiki", url: "http://zqktlwiuavvvqqt4ybvgvi7tyo4hjl5xgfuvpdf6otjiycgwqbym2qad.onion/", description: "ويكي الويب المظلم" },
            { name: "OnionScan", url: "https://github.com/s-rah/onionscan", description: "فحص خدمات Onion" },
            { name: "Ahmia", url: "https://ahmia.fi/", description: "محرك بحث الويب المظلم" }
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
    classifieds: {
        title: "الإعلانات المبوبة",
        resources: [
            { name: "Craigslist Search", url: "https://www.craigslist.org/", description: "البحث في Craigslist" },
            { name: "Facebook Marketplace", url: "https://www.facebook.com/marketplace/", description: "سوق Facebook" },
            { name: "OfferUp", url: "https://offerup.com/", description: "منصة البيع المحلية" },
            { name: "Mercari", url: "https://www.mercari.com/", description: "منصة البيع عبر الإنترنت" },
            { name: "eBay", url: "https://www.ebay.com/", description: "مزادات ومبيعات عبر الإنترنت" },
            { name: "Gumtree", url: "https://www.gumtree.com/", description: "إعلانات مبوبة" }
        ]
    },
    encoding: {
        title: "التشفير وفك التشفير",
        resources: [
            { name: "CyberChef", url: "https://gchq.github.io/CyberChef/", description: "أداة التشفير الشاملة" },
            { name: "Base64 Decode", url: "https://www.base64decode.org/", description: "فك تشفير Base64" },
            { name: "URL Decoder", url: "https://www.urldecoder.org/", description: "فك تشفير URL" },
            { name: "MD5 Hash", url: "https://www.md5hashgenerator.com/", description: "مولد MD5 Hash" },
            { name: "Hash Analyzer", url: "https://www.tunnelsup.com/hash-analyzer/", description: "محلل Hash" },
            { name: "ROT13", url: "https://rot13.com/", description: "تشفير وفك تشفير ROT13" },
            { name: "ASCII Converter", url: "https://www.rapidtables.com/convert/number/ascii-hex-bin-dec-converter.html", description: "محول ASCII" }
        ]
    },
    tools: {
        title: "الأدوات",
        resources: [
            { name: "OSINT Framework", url: "https://osintframework.com/", description: "إطار عمل OSINT" },
            { name: "Maltego", url: "https://www.maltego.com/", description: "أداة تحليل الروابط" },
            { name: "SpiderFoot", url: "https://www.spiderfoot.net/", description: "أداة OSINT التلقائية" },
            { name: "theHarvester", url: "https://github.com/laramies/theHarvester", description: "جمع المعلومات" },
            { name: "Recon-ng", url: "https://github.com/lanmaster53/recon-ng", description: "إطار عمل الاستطلاع" },
            { name: "OWASP Maryam", url: "https://github.com/saeeddhqan/Maryam", description: "إطار عمل OSINT" },
            { name: "Photon", url: "https://github.com/s0md3v/Photon", description: "زاحف ويب سريع" },
            { name: "Datasploit", url: "https://github.com/DataSploit/datasploit", description: "أداة OSINT شاملة" }
        ]
    },
    ai: {
        title: "أدوات الذكاء الاصطناعي",
        resources: [
            { name: "ChatGPT", url: "https://chat.openai.com/", description: "مساعد ذكي للمحادثة" },
            { name: "Google Bard", url: "https://bard.google.com/", description: "مساعد Google الذكي" },
            { name: "Perplexity AI", url: "https://www.perplexity.ai/", description: "محرك بحث ذكي" },
            { name: "Claude", url: "https://claude.ai/", description: "مساعد Anthropic الذكي" },
            { name: "IBM Watson", url: "https://www.ibm.com/watson", description: "منصة IBM للذكاء الاصطناعي" },
            { name: "Hugging Face", url: "https://huggingface.co/", description: "منصة نماذج الذكاء الاصطناعي" },
            { name: "OpenAI Playground", url: "https://platform.openai.com/playground", description: "ملعب OpenAI" }
        ]
    },
    malware: {
        title: "تحليل الملفات الضارة",
        resources: [
            { name: "VirusTotal", url: "https://www.virustotal.com/", description: "فحص الملفات والمواقع" },
            { name: "Hybrid Analysis", url: "https://www.hybrid-analysis.com/", description: "تحليل البرمجيات الخبيثة" },
            { name: "Any.run", url: "https://any.run/", description: "تحليل البرمجيات الخبيثة" },
            { name: "Joe Sandbox", url: "https://www.joesandbox.com/", description: "تحليل البرمجيات الخبيثة" },
            { name: "Cuckoo Sandbox", url: "https://cuckoosandbox.org/", description: "تحليل البرمجيات الخبيثة" },
            { name: "YARA Rules", url: "https://virustotal.github.io/yara/", description: "قواعد كشف البرمجيات الخبيثة" },
            { name: "MalShare", url: "https://malshare.com/", description: "مشاركة عينات البرمجيات الخبيثة" },
            { name: "Malware Bazaar", url: "https://bazaar.abuse.ch/", description: "قاعدة بيانات البرمجيات الخبيثة" },
            { name: "URLHaus", url: "https://urlhaus.abuse.ch/", description: "قاعدة بيانات المواقع الخبيثة" },
            { name: "Inquest Labs", url: "https://labs.inquest.net/", description: "تحليل البرمجيات الخبيثة" }
        ]
    },
    exploits: {
        title: "الثغرات والاستشارات",
        resources: [
            { name: "CVE Database", url: "https://cve.mitre.org/", description: "قاعدة بيانات الثغرات" },
            { name: "NVD NIST", url: "https://nvd.nist.gov/", description: "قاعدة بيانات الثغرات الوطنية" },
            { name: "Exploit Database", url: "https://www.exploit-db.com/", description: "قاعدة بيانات الاستغلالات" },
            { name: "Packet Storm", url: "https://packetstormsecurity.com/", description: "أخبار الأمان والاستغلالات" },
            { name: "SecurityFocus", url: "https://www.securityfocus.com/", description: "معلومات الثغرات الأمنية" },
            { name: "VulnDB", url: "https://vulndb.cyberriskanalytics.com/", description: "قاعدة بيانات الثغرات" },
            { name: "Zero Day Initiative", url: "https://www.zerodayinitiative.com/", description: "مبادرة اليوم الصفر" }
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
            { name: "ThreatMiner", url: "https://www.threatminer.org/", description: "استخبارات التهديدات" },
            { name: "IBM X-Force", url: "https://exchange.xforce.ibmcloud.com/", description: "استخبارات التهديدات" },
            { name: "Pulsedive", url: "https://pulsedive.com/", description: "استخبارات التهديدات المجانية" },
            { name: "Recorded Future", url: "https://www.recordedfuture.com/", description: "ذكاء التهديدات" },
            { name: "Shodan InternetDB", url: "https://internetdb.shodan.io/", description: "قاعدة بيانات الإنترنت" },
            { name: "SecurityTrails", url: "https://securitytrails.com/", description: "تاريخ DNS والتهديدات" },
            { name: "URLScan.io", url: "https://urlscan.io/", description: "فحص المواقع" },
            { name: "Maltiverse", url: "https://maltiverse.com/", description: "منصة استخبارات التهديدات" },
            { name: "C1fApp", url: "https://www.c1fapp.com/", description: "منصة استخبارات مجانية" },
            { name: "Triage", url: "https://tria.ge/", description: "تحليل البرمجيات الخبيثة" }
        ]
    },
    opsec: {
        title: "الأمان التشغيلي",
        resources: [
            { name: "Tor Browser", url: "https://www.torproject.org/", description: "متصفح آمن ومجهول" },
            { name: "Tails OS", url: "https://tails.boum.org/", description: "نظام تشغيل آمن" },
            { name: "VPN Comparison", url: "https://thatoneprivacysite.net/", description: "مقارنة خدمات VPN" },
            { name: "Have I Been Pwned", url: "https://haveibeenpwned.com/", description: "فحص تسريب البيانات" },
            { name: "ProtonMail", url: "https://protonmail.com/", description: "بريد إلكتروني مشفر" },
            { name: "Signal", url: "https://signal.org/", description: "تطبيق مراسلة آمن" },
            { name: "DuckDuckGo", url: "https://duckduckgo.com/", description: "محرك بحث يحمي الخصوصية" }
        ]
    },
    documentation: {
        title: "التوثيق وجمع الأدلة",
        resources: [
            { name: "Hunchly", url: "https://www.hunch.ly/", description: "أداة توثيق التحقيقات" },
            { name: "WebCopy", url: "https://www.cyotek.com/cyotek-webcopy", description: "نسخ المواقع" },
            { name: "HTTrack", url: "https://www.httrack.com/", description: "تحميل المواقع" },
            { name: "Wayback Machine", url: "https://archive.org/web/", description: "أرشيف الإنترنت" },
            { name: "Archive.today", url: "https://archive.today/", description: "أرشيف المواقع" },
            { name: "Screenshots.com", url: "https://www.screenshots.com/", description: "لقطات شاشة للمواقع" },
            { name: "FullPageScreenCapture", url: "https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl", description: "لقطة شاشة كاملة" }
        ]
    },
    training: {
        title: "التدريب",
        resources: [
            { name: "OSINT Curious", url: "https://osintcurio.us/", description: "مجتمع OSINT للتعلم" },
            { name: "Bellingcat", url: "https://www.bellingcat.com/", description: "تقنيات التحقيق الرقمي" },
            { name: "OSINT Framework", url: "https://osintframework.com/", description: "إطار عمل OSINT" },
            { name: "SANS FOR578", url: "https://www.sans.org/cyber-security-courses/cyber-threat-intelligence/", description: "دورة استخبارات التهديدات" },
            { name: "Intel Techniques", url: "https://inteltechniques.com/", description: "تقنيات الاستخبارات" },
            { name: "OSINT Combine", url: "https://www.osintcombine.com/", description: "أدوات وتدريب OSINT" },
            { name: "OSINT Dojo", url: "https://www.osintdojo.com/", description: "تدريب OSINT" },
            { name: "Tracelabs", url: "https://www.tracelabs.org/", description: "OSINT للأشخاص المفقودين" }
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
        // Show trending categories
        const trendingCategories = ['social', 'search', 'crypto', 'threat', 'ai', 'geolocation'];
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

// Suggest resource functionality
function suggestResource() {
    const modalHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>اقتراح مصدر جديد</h2>
                    <button class="close-btn" onclick="closeModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="suggestForm" onsubmit="submitSuggestion(event)">
                        <div class="form-group">
                            <label for="resourceName">اسم المصدر:</label>
                            <input type="text" id="resourceName" name="resourceName" required>
                        </div>
                        <div class="form-group">
                            <label for="resourceUrl">رابط المصدر:</label>
                            <input type="url" id="resourceUrl" name="resourceUrl" required>
                        </div>
                        <div class="form-group">
                            <label for="resourceDescription">وصف المصدر:</label>
                            <textarea id="resourceDescription" name="resourceDescription" rows="4" required></textarea>
                        </div>
                        <div class="form-group">
                            <label for="resourceCategory">القسم:</label>
                            <select id="resourceCategory" name="resourceCategory" required>
                                <option value="">اختر القسم</option>
                                <option value="username">أسماء المستخدمين</option>
                                <option value="email">عناوين البريد الإلكتروني</option>
                                <option value="domain">أسماء النطاقات</option>
                                <option value="ip">عناوين IP و MAC</option>
                                <option value="media">الصور والفيديو والمستندات</option>
                                <option value="social">الشبكات الاجتماعية</option>
                                <option value="geolocation">أدوات الموقع الجغرافي والخرائط</option>
                                <option value="search">محركات البحث</option>
                                <option value="threat">استخبارات التهديدات</option>
                                <option value="crypto">العملات الرقمية</option>
                                <option value="tools">الأدوات</option>
                                <option value="other">أخرى</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="submitterName">اسمك (اختياري):</label>
                            <input type="text" id="submitterName" name="submitterName" placeholder="adce626">
                        </div>
                        <button type="submit" class="submit-btn">
                            <i class="fas fa-paper-plane"></i>
                            إرسال الاقتراح
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    addModalStyles();
    addFormStyles();
    
    setTimeout(() => {
        document.querySelector('.modal-overlay').style.opacity = '1';
        document.querySelector('.modal-content').style.transform = 'translateY(0) scale(1)';
    }, 10);
}

// Submit suggestion
function submitSuggestion(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const suggestion = {
        resourceName: formData.get('resourceName'),
        resourceUrl: formData.get('resourceUrl'),
        resourceDescription: formData.get('resourceDescription'),
        resourceCategory: formData.get('resourceCategory'),
        submitterName: formData.get('submitterName') || 'مجهول',
        timestamp: new Date().toISOString()
    };

    // Create email content
    const emailSubject = encodeURIComponent(`Shadow_OSINT: اقتراح مصدر جديد - ${suggestion.resourceName}`);
    const emailBody = encodeURIComponent(`
تم اقتراح مصدر جديد لموقع Shadow_OSINT:

اسم المصدر: ${suggestion.resourceName}
رابط المصدر: ${suggestion.resourceUrl}
وصف المصدر: ${suggestion.resourceDescription}
القسم: ${suggestion.resourceCategory}
اسم المقترح: ${suggestion.submitterName}
التاريخ والوقت: ${new Date().toLocaleString('ar-SA')}

---
تم الإرسال من موقع Shadow_OSINT
    `);

    // Create mailto link
    const mailtoLink = `mailto:adce626@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    // Show success message
    showSuccessMessage();
    
    // Close modal
    setTimeout(() => {
        closeModal();
    }, 2000);
}

// Show success message
function showSuccessMessage() {
    const successHTML = `
        <div class="success-message">
            <i class="fas fa-check-circle"></i>
            <h3>تم إرسال الاقتراح بنجاح!</h3>
            <p>شكراً لك على المساهمة في تحسين الموقع</p>
        </div>
    `;
    
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = successHTML;
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
                    box-shadow: 0 0 15px var(--primary-green), 0 0 30px var(--primary-green);
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
                    box-shadow: 0 0 10px var(--primary-green);
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

                .success-message {
                    text-align: center;
                    padding: 40px 20px;
                    color: var(--text-primary);
                }

                .success-message i {
                    font-size: 4rem;
                    color: var(--primary-green);
                    margin-bottom: 20px;
                }

                .success-message h3 {
                    color: var(--primary-green);
                    margin-bottom: 15px;
                    font-size: 1.5rem;
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', styles);
    }
}

// Add form styles
function addFormStyles() {
    if (!document.querySelector('#form-styles')) {
        const styles = `
            <style id="form-styles">
                .form-group {
                    margin-bottom: 20px;
                }

                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    color: var(--primary-green);
                    font-weight: 600;
                }

                .form-group input,
                .form-group select,
                .form-group textarea {
                    width: 100%;
                    padding: 12px 15px;
                    background: var(--bg-dark);
                    border: 2px solid var(--text-muted);
                    border-radius: 10px;
                    color: var(--text-primary);
                    font-family: 'Cairo', sans-serif;
                    transition: all 0.3s ease;
                    direction: rtl;
                }

                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--primary-green);
                    box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
                }

                .submit-btn {
                    background: linear-gradient(135deg, var(--primary-green), var(--secondary-green));
                    color: var(--bg-dark);
                    border: none;
                    padding: 15px 30px;
                    border-radius: 25px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin: 20px auto 0;
                    font-family: 'Cairo', sans-serif;
                }

                .submit-btn:hover {
                    background: linear-gradient(135deg, var(--neon-green), var(--primary-green));
                    transform: translateY(-2px);
                    box-shadow: 0 0 20px var(--primary-green);
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', styles);
    }
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