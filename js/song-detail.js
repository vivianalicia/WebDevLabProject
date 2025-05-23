document.addEventListener("DOMContentLoaded", function(){
    const playIcon = document.getElementById("play");
    const pauseIcon = document.getElementById ("pause");
    const seekSlider = document.getElementById("range");
    const currentTime = document.getElementById("current-time");
    const durationTime = document.getElementById("total-time");
    const audio = document.getElementById("audio");
    const songs = [
        {
            id: '1',
            title: 'FE!N',
            artist: 'Travis Scott',
            description: 'FE!N” is a bold, immersive album where Travis Scott blends futuristic trap with introspective themes and experimental sounds.',
            cover: '../assets/Collection/Pop/travis scott - UTOPIA.jpeg',
            file: '../assets/Songs/Travis Scott Ft. Playboi Carti & Sheck Wes – FEIN.mp3',
            lyric: `[Intro: Travis Scott & Sheck Wes]
                    Just come outside for the night (Yeah)
                    Take your time, get your light (Yeah)
                    Johnny Dang, yeah, yeah
                    I been out geekin' (Bitch)

                    [Chorus: Travis Scott]
                    FE!N, FE!N, FE!N, FE!N, FE!N (Yeah)
                    FE!N, FE!N, FE!N, FE!N, FE!N (Yeah)
                    FE!N, FE!N, FE!N, FE!N, FE!N
                    FE!N, FE!N (Yeah), FE!N, FE!N, FE!N

                    [Verse 1: Travis Scott & Sheck Wes]
                    The career's more at stake when you in your prime (At stake)
                    Fuck that paper, baby, my face on the dotted line (Dot, yeah)
                    I been flyin' out of town for some peace of mind (Yeah, yeah, bitch)
                    It's like always they just want a piece of mine (Ah)
                    I been focused on the future, never on right now (Ah)
                    What I'm sippin' not kombucha, either pink or brown (It's lit)
                    I'm the one that introduced you to the you right now (Mm, let's go)
                    Oh my God, that bitch bitin' (That bitch bitin')
                    Well, alright (Alright), tryna vibe (I'm tryna vibe this)
                    In the night, come alive
                    Ain't asleep, ain't a—, ain't a—, ain't-ain't

                    [Chorus: Travis Scott]
                    FE!N, FE!N, FE!N, FE!N, FE!N
                    FE!N, FE!N, FE!N, FE!N, FE!N
                    FE!N, FE!N, FE!N, FE!N, FE!N
                    FE!N, FE!N, FE!N, FE!N
                    FE!N, FE!N, FE!N, FE!N, FE!N
                    See Travis Scott Live
                    Get tickets as low as $30
                   
                    [Bridge: Playboi Carti]
                    Schyeah, woah, what?
                    What?
                    (Homixide, Homixide, Homixide, Homixide)
                    What? (Yeah)
                    Woah, woah (Yeah, yeah)
                    (Homixide, Homixide, Homixide, Homixide)
                    Hit, yeah, hold up (Yeah)

                    [Verse 2: Playboi Carti]
                    Yeah, I just been poppin' my shit and gettin' it live, hold up (Shit)
                    Yeah, you try to come wrong 'bout this shit, we poppin' your tires, hold up (Shit)
                    Uh, hundred-round (Woah), feelin' like I'm on ten
                    Playin' both sides with these hoes (Hold up), shawty, I'm fuckin' your friend (Hold up)
                    I've been goin' crazy, shawty, I've been in the deep end
                    She not innocent, uh, she just tryna go

                    [Chorus: Travis Scott & Playboi Carti]
                    FE!N (Talkin' 'bout), FE!N, FE!N (Schyeah), FE!N, FE!N (Schyeah, oh, oh, what? Schyeah)
                    FE!N, FE!N (Schyeah), FE!N, FE!N, FE!N (Oh, oh)
                    FE!N, FE!N (Talkin' 'bout), FE!N, FE!N, FE!N, FE!N (Talkin' 'bout, let's go)

                    [Verse 3: Playboi Carti & Travis Scott]
                    I just been icin' my hoes, I just been drippin' my hoes (Drippin' my hoes)
                    This is a whole 'nother level, shawty (Oh), I got these hoes on they toes (Hoes on they toes)
                    I put the bitch on the road, she tryna fuck on the O, hold up, hold up
                    I got this ho with me, she tryna show me somethin', hold up, hold up (Oh)
                    I got flows for days, these niggas ain't on nothin', hold up, yeah (Oh)
                    Me and my boy locked in, you know we on one, hold up, uh (Slatt, slatt)
                    We in the spot goin' crazy until the sun up
                    You worried about that ho, that ho done chose up (Slatt, bitch-ass)
                    Uh, pistols all in the kitchen, can't give the zip code up, hold up, yeah, slatt (Wow)
                    FE!N, FE!N, FE!N (Huh? Huh? Huh? Huh? Yeah)
                    Why the fuck these niggas actin' like they know us?
                    00CACTUS, yeah, we towed up (Skrrt, skrrt), uh, yeah
                    Switch out the bag, these niggas get rolled up, hold up (It's lit), slatt
                    Everything hit, hold up, everything Homixide, Homixide (Homixide, Homixide, Homixide, Homixide)
                    [Outro: Travis Scott & Playboi Carti]
                    FE!N, FE!N, FE!N, FE!N, FE!N, FE!N (Homixide, Homixide, Homixide, Homixide, Homixide, Homixide, Homixide)`
            
            
        },
        {
            id:'2',
            title: 'WILDFLOWER',
            artist: 'Billie Eilish',
            description: 'Wildflower" is a folk-pop ballad by Billie Eilish about the guilt of falling for a friend’s ex. With soft acoustic tones and raw emotion, it showcases her intimate storytelling.',
            cover: '../assets/Collection/Pop/billiecover.jpeg',
            file: '../assets/Songs/Billie Eilish – WILDFLOWER.mp3',
            lyric: `[Verse 1]
                    Things fall apart
                    And time breaks your heart
                    I wasn't there, but I know
                    She was your girl
                    You showed her the world
                    But fell out of love and you both let go

                    [Pre-Chorus]
                    She was cryin’ on my shoulder
                    All I could do was hold her
                    Only made us closer until July
                    Now, I know that you love me
                    You don't need to remind me
                    I should put it all behind me, shouldn't I?

                    [Chorus]
                    But I see her in the back of my mind all the time
                    Like a fever, like I’m burning alive, like a sign
                    Did I cross the line?
                    (Mm) Hmm

                    [Verse 2]
                    Well, good things don't last (Good things don't last)
                    And life moves so fast (Life moves so fast)
                    I'd never ask who was better (I'd never ask who was better)
                    'Cause she couldn't be (Couldn't)
                    More different from me (Different)
                    Happy and free in leather (Happy)
                    
                    [Pre-Chorus]
                    And I know that you love me (You love me)
                    You don’t need to remind me (Remind me)
                    Wanna put it all behind me, but baby

                    [Chorus]
                    I see her in the back of my mind (Back of my mind) all the time (All the time)
                    Feels like a fever (Like a fever), like I’m burning alive (Burning alive), like a sign
                    Did I cross the line?

                    [Bridge]
                    You say no one knows you so well (Oh)
                    But every time you touch me, I just wonder how she felt
                    Valentine's Day, cryin’ in the hotel
                    I know you didn't mean to hurt me, so I kept it to myself

                    [Chorus]
                    And I wonder
                    Do you see her in the back of your mind in my eyes?

                    [Outro]
                    You say no one knows you so well
                    But every time you touch me, I just wonder how she felt
                    Valentine's Day, cryin' in the hotel
                    I know you didn’t mean to hurt me, so I kept it to myself`,
        },
        {
            id:'3',
            title: 'The Chase',
            artist: 'Heart 2 Hearts',
            description: 'A whimsical love song filled with dreamy imagery and fairytale-like devotion.',
            cover: '../assets/Collection/K-Pop/-H2Hthe chase.jpeg',
            file: '../assets/Songs/Hearts2Hwarts - The Chase.mp3',
            lyric: `[Verse 1: Yuha, Carmen]
                    Kkumi kkumeul kkuneunde
                    Beamy, beamy, geu biche
                    Hollin deusi ttara georeo
                    Hogisimeun jakkuman keojyeo
                    Igeol masyeo
                    Boge doelgeol
                    Neoman, yeah

                    [Pre-Chorus: Jiwoo, Ian & Ye-on, Stella & Yuha, Ye-on]
                    Paran ingkeu bitkkal sok heeomchyeo
                    Ppigeokdaeneun chalky, chalky
                    Bunpireun gajireonhi
                    Uri yaegireul badasseugetji
                    I'll make you say my name
                    Eotteoke an geurae?
                    I love the way, you love the chase

                    [Chorus: Juun, Ian]
                    Hop, nae moheomui
                    Cheotgeoreumeul didyeo
                    Ontong susukkekki
                    Nan deo algo sipeo
                    Crop, nae mamdaero
                    Jallanaen hwansangui jogak
                    Sparkle, sparkle
                    Mwongareul bon geot gata
                
                    [Verse 2: Stella, Yuha, Yuha & Carmen, Carmen]
                    Geusae keobeorin geolkka? (Hey)
                    Seolmyeonghal su eomneunde (Hey)
                    On himeul dahae nan dallyeo
                    Meomchwo seo itgo
                    Sipji ana (Keodaran, 'motion)
                    I keodaran
                    Emotion, yeah, yeah

                    [Pre-Chorus: Ian, Jiwoo & Yuha, Ye-on & Stella, Stella]
                    Tteodanineun quiz geu teumsae
                    Soneul ppeodeo nakka, jingle, jingle
                    Yeolsoeneun yoranseure (Yeah)
                    Muneul yeoreobwa jolladaegetji
                    I'll make you say my name (My name)
                    Jumunboda ganghae (Ganghae)
                    I love the way, you love the chase

                    [Chorus: Jiwoo, A-na]
                    Hop, nae moheomui
                    Cheotgeoreumeul didyeo
                    Ontong susukkekki
                    Nan deo algo sipeo
                    Crop, nae mamdaero
                    Jallanaen hwansangui jogak
                    Sparkle, sparkle
                    Mwongareul bon geot gata
                    [Bridge: Stella, Ye-on, Yuha]
                    Baby, we got what you need
                    Our love is so sweet, it pops like candy, yeah
                    Haetsare nun gamanhi gameun chae
                    Nae mamdaero dallyeoga, nae sesangeul gajyeobwa

                    [Post-Bridge: Jiwoo & Juun, Carmen]
                    Come and get ya, come and get ya, come and get ya, yeah (Yeah)
                    It's forever, it's forever, it's forever, yeah (Yeah)
                    'Til the end, hwansange ppajil neowa naya, maja
                    Kkumi kkumkkugil sijakae, yeah (Ah-ooh)

                    [Chorus: Ian, Jiwoo, A-na, Juun, (Carmen)]
                    Nae moheomui (Ooh)
                    Cheotgeoreumiya (Oh)
                    Nae mamdaero (Oh, no, woah, woah)
                    Gago sipeo, kkumeun sijakdwaesseo

                    [Post-Chorus: All, Ian & Ye-on, Yuha]
                    Hop, nae moheomui (Paran ingkeu bitkkal sogeul; Ah)
                    Cheotgeoreumeul (Tteodanineun quiz geu teumeul; Ah)
                    Nae mamdaero (Ah)
                    I love the way, you love the chase`,
        },

        {
            id:'4',
            title: 'Still WIth You',
            artist: 'Jungkook',
            description: 'A nostalgic track reminiscing past memories through voicemails.',
            cover: '../assets/Collection/K-Pop/jung kook - still with you.jpeg',
            file: '../assets/Songs/(BTS) Jungkook - Still With You.mp3',
            lyric: `[Intro]
                    Nal seuchineun geudaeui yeoteun geu moksori
                    Nae ireumeul han beonman deo bulleojuseyo
                    Eoreobeorin noeul arae meomchwo seoitjiman
                    Geudae hyanghae han georeumssik georeogallaeyo
                    Still with you

                    [Verse 1]
                    Eoduunbang jomyeong hana eopsi
                    Iksukaejimyeon an doeneunde
                    Geuge tto iksukae
                    Najimagi deullineun
                    I eeokeon sori
                    Igeorado eopseumyeon
                    Na jeongmal muneojil geot gata

                    [Pre Chorus 1]
                    Hamkke utgo hamkke ulgo
                    I dansunhan gamjeongdeuri
                    Naegen jeonbuyeonna bwa
                    Eonjejjeumilkka
                    Dasi geudael majuhandamyeon
                    Nuneul bogo malhallaeyo
                    Bogo sipeosseoyo

                    [Chorus]
                    Hwangholhaetdeon gieok soge
                    Na hollo chumeul chwodo biga naerijana
                    I angaega geotil ttaejjeum
                    Jeojeun ballo dallyeogal ge
                    Geuttae nal anajwo
                    
                    [Verse 2]
                    Jeo dari oerowo boyeoseo
                    Bamhaneure hwanhage ulgo inneun geot gataseo
                    Eonjenga achimi oneun geol almyeonseodo
                    Byeolcheoreom neoui haneure meomulgo sipeosseo

                    [Pre Chorus 2]
                    Harureul geu sunganeul
                    Ireoke doel geol aratdamyeon
                    Deo damadwosseul tende
                    Eonjejjeumilkka
                    Dasi geudael majuhandamyeon
                    Nuneul bogo malhallaeyo
                    Bogo sipeosseoyo

                    [Chorus]
                    Hwangholhaetdeon gieok soge
                    Na hollo chumeul chwodo biga naerijana
                    I angaega geotil ttaejjeum
                    Jeojeun ballo dallyeogal ge
                    Geuttae nal jabajwo

                    [Outro]
                    Nal baraboneun huimihan miso dwipyeone
                    Areumdaun boratbicheul geuryeobollaeyo
                    Seoro balgeoreumi an majeul sudo itjiman
                    Geudaewa hamkke i gireul geotgo sipeoyo
                    Still with you`,
        },

        {
            id:'5',
            title: 'Tempo',
            artist: 'EXO',
            description: 'A bold, rhythmic track about not letting anyone mess with their loves rhythm.',
            cover: '../assets/Collection/K-Pop/eco - tempo.jpeg',
            file: '../assets/Songs/EXO - Tempo.MP3',
            lyric: `[Intro: Chen, Baekhyun, Kai]
                    I can't believe
                    Gidaryeotdeon ireon neukkim (Oh)
                    Naman deutgo sipeun geunyeoneun naye mellodi
                    Haru jongil go on and on and oh
                    Tteonaji anke geunyeol nae gyeote
                    Yeah, uh

                    [Chorus: All]
                    Don't mess up my tempo
                    Deureobwa igeon chungbunhi (Nah)
                    I said don't mess up my tempo
                    Geunyeoye mameul humchil beat, uh
                    Eodiedo eopseul rideume matchwo 1, 2, 3, uh (Yeah)
                    Don't mess up my tempo
                    Meomchul su eomneun ikkeullim oh

                    [Post-Chorus: Xiumin, Baekhyun]
                    Maehokjeogin neon lovely
                    Teum eopsi jopyeojin geori
                    Bulgyuchikaejineun heartbeat
                    Jamsi nuneul gama trust me (Woo-hoo)

                    [Verse 1: Sehun, Chen & Sehun, Chen, (Baekhyun), ((Chanyeol))]
                    Bakkeuro nagal chaebi miri haedwo are you ready? ((Look))
                    Oneureun naega kaeri dosi na saiye kemi (Aw)
                    Imi nawa nokon mwoga changpihae ma' boo (Ah)
                    Eojeongjjeong eobeobeo hal pillyo eopdago ((Coming out))
                    Chaenggil geon eopseuni sonjaba my lady
                    Ganeun gilmada redeu kapet tto reonweiingeol
                    Balgeoreumi namdalla (Swish)
                    Jigeum i sokdo matchwoboja tempo, ah
                    
                    [Pre-Chorus: Suho, Suho & Baekhyun, Chanyeol]
                    Baby girl achimeul seollege haneun morning call
                    Maeil bwado bogo sipeun mamingeol
                    Jigeumbuteo nawa let's get down (Get down!)
                    Modeun geosi wanbyeokage joa
                    So don't slow it up for me

                    [Hook: All]
                    Don't mess up my tempo
                    Deureobwa igeon chungbunhi
                    I said don't mess up my tempo
                    Geunyeoye mameul humchil beat, uh
                    Eodiedo eopseul rideume matchwo 1, 2, 3, uh
                    Don't mess up my tempo
                    Meomchul su eomneun ikkeullim ya

                    [Post-Chorus: Baekhyun, Chen]
                    Juwil dulleobwa lovely (Oh-oh-oh)
                    Teum eopsi jopyeojin geori
                    Neoege matchwojin heartbeat
                    Hago sipeun daero teach me

                    [Verse 2: Chanyeol, D.O, Kai]
                    Uh (Woo-ooh) yeogin nae guyeok don't test me (Oh yeah)
                    Honja itgi eosaekadamyeon bonaejwo message
                    Now you got me flexin' (Flexin')
                    Juwil dulleobwa
                    Neol boneun deulleorideul sok widaehan gaecheubi (Hold on)
                    (Wow) I'm doing alright baby girl, you don't know (You don't)
                    Chiwo ne meori wie mureumpyo (What?)
                    Nae sajeone eomneun L.I.E
                    Neoneun imi jayeonseureopge matchugo isseo nae tempo
                    [Pre-Chorus: D.O, Suho, Chen, (Baekhyun)]
                    Baby girl (Baby girl)
                    Nae eokkaee saljjak gidaen geudaeye (Gidaen geudaeye)
                    Aryeonhan hyanggiga dasi nae mame (Nae mame baby)
                    Soyongdorichimyeo morachinda
                    Idaero nan yeongwonhago sipda
                    So don't mess up my tempo baby
                    Don't slow it up for me

                    [Hook: Kai, Chanyeol, Baekhyun]
                    Don't mess up my tempo
                    Don't mess up my tempo
                    Don't mess up my tempo
                    Don't mess up my (Whoa, uh)
                    Don't mess up my tempo
                    Don't mess up my tempo
                    Don't mess up my tempo

                    [Bridge: Chen, D.O, Chen/D.O, (Baekhyun), ((Sehun))]
                    Nae nuneul barabogo malhae
                    Naye gwitgaeman dake (Ooh, mhm)
                    Naman saranghanda malhae
                    Nabakke eopdago malhae
                    (Deo isang heundeulliji anke) (Oh-oh-oh)
                    (Jeoldae neol ppaetgiji anke) (Oh-oh-oh)
                    (Nugudo geondeul su eopge) (Whoa)
                    ((Nae gyeote neoreul jikilge))
                    [Interlude 1: Chanyeol, Suho, Baekhyun, (Xiumin)]
                    Dum-dum-dum-dum
                    Dum-dum-dum-dum-dum
                    Nae maeumi neukkyeojini (Neukkyeojini)
                    Nareul gamssa aneun yuilhan namanye savior
                    (Oh-oh-oh-oh, no) modu geureon neol baraboge dwae

                    [Interlude 2: Baekhyun, Suho, D.O, (Chen)]
                    I can't believe
                    I can’t believe (I can't believe)
                    Gidaryeotdeon ireon neukkim (Ireon neukkim)
                    Naman deutgo sipeun geunyeoneun naye mellodi
                    Haru jongil go on and on and oh
                    Tteonaji anke geunyeol nae gyeote

                    [Chorus: All, Chen]
                    (Yeah, yeah, yeah)
                    Don't mess up my tempo
                    Ttarawa igeon chungbunhi
                    (Don't mess up my tempo baby)
                    I said don't mess up my tempo
                    Wanjeonhi dareun saegye beat uh
                    (My tempo, hoo-hoo)
                    Eodiedo eopseul ireon wanbyeokan 1, 2, 3, uh
                    (Wanbyeokan 1, 2, 3, yeah)
                    Don't mess up my tempo
                    Meomchul su eomneun ikkeullim (No)`,
        },

        {
            id:'6',
            title: 'Kill Bill',
            artist: 'SZA',
            description: 'A bold, rhythmic track about not letting anyone mess with their loves rhythm.',
            cover: '../assets/Collection/R&B/sza - low.jpg',
            file: '../assets/Songs/SZA - Kill Bill.mp3',
            lyric: `[Verse 1]
                    I'm still a fan even though I was salty
                    Hate to see you with some other broad, know you happy
                    Hate to see you happy if I'm not the one drivin'

                    [Pre-Chorus]
                    I'm so mature, I'm so mature
                    I'm so mature, I got me a therapist to tell me there's other men
                    I don't want none, I just want you
                    If I can't have you, no one should

                    [Chorus]
                    I might
                    I might kill my ex, not the best idea
                    His new girlfriend's next, how'd I get here?
                    I might kill my ex, I still love him though
                    Rather be in jail than alone

                    [Verse 2]
                    I get the sense that it's a lost cause
                    I get the sense that you might really love her
                    This text gon' be evidence, this text is evidence
                    I tried to ration with you, no murders or crime of passion, but damn
                    You was out of reach
                    You was at the farmer's market with your perfect peach
                    Now I'm in the basement plannin' home invasion
                    Now you layin' face-down, got me singin' over a beat
                    
                    [Pre-Chorus]
                    I'm so mature, I'm so mature
                    I'm so mature, I got me a therapist to tell me there's other men
                    I don't want none, I just want you
                    If I can't have you, no one will

                    [Chorus]
                    I might (I)
                    I might kill my ex, not the best idea
                    His new girlfriend's next, how'd I get here?
                    I might kill my ex, I still love him though
                    Rather be in jail than alone

                    [Bridge]
                    I did it all for love (Love)
                    I did it all on no drugs (Drugs)
                    I did all of this sober
                    I did it all for us, oh
                    I did it all for love (Love)
                    I did all of this on no drugs (Drugs)
                    I did all of this sober
                    Don't you know I did it all for us? (I'm gon' kill your ass tonight)

                    [Chorus]
                    Oh, I just killed my ex (My ex, oops), not the best idea (Idea)
                    Killed his girlfriend next, how'd I get here? (He left me no choice)
                    I just killed my ex (My ex), I still love him though (I do)
                    Rather be in Hell than alone`,
        },

        {
            id:'7',
            title: 'Creepin\'',
            artist: 'Metroboomin',
            description: 'A sharp, catchy tune about unreciprocated feelings and intoxicated confessions.',
            cover: '../assets/Collection/R&B/metroboomin - creepin.jpeg',
            file: '../assets/Songs/Metro Boomin - Creepin.mp3',
            lyric: `[Intro]
                    (Just can't believe this, man)
                    (Metro Boomin want some more, nigga)

                    [Verse 1: The Weeknd]
                    Somebody said they saw you
                    The person you were kissing wasn't me
                    And I would never ask you
                    I just kept it to myself

                    [Chorus: The Weeknd]
                    I don't wanna know
                    If you're playin' me, keep it on the low
                    'Cause my heart can't take it anymore
                    And if you creepin', please don't let it show
                    Oh, baby, I don't wanna know

                    [Verse 2: The Weeknd]
                    I think about it when I hold you
                    When lookin' in your eyes, I can't believe
                    And I don't need to know the truth
                    Baby, keep it to yourself

                    [Chorus: The Weeknd]
                    I don't wanna know
                    If you're playin' me, keep it on the low
                    'Cause my heart can't take it anymore
                    And if you creepin', please don't let it show
                    Oh, baby, I don't wanna know
                   
                    [Bridge: Mario Winans, The Weeknd, Both]
                    Did he touch you better than me? (Touch you better than me)
                    Did he watch you fall asleep? (Watch you fall asleep)
                    Did you show him all those things that you used to do to me?
                    If you're better off that way (Better off that way)
                    There ain't more that I can say (More that I can say)
                    Just go on and do your thing and don't come back to me

                    [Verse 3: 21 Savage]
                    Woah, woah, woah, 21
                    Had me crushin', I was cuffin' like the precinct
                    How you go from housewife to a sneaky link?
                    Got you riding 'round in all type of Benzes and Rovers
                    Girl, you used to ride in the rinky-dink
                    I'm the one put you in Eliantte (On God)
                    Fashion Nova model, I put you on the runway (On God)
                    You was rockin' Coach bags, got you Chane'-ne'
                    Side bitch in Frisco, I call her my Bay-bae (21)
                    I got a girl, but I still feel alone (On God)
                    If you playin' me that mean my home ain't home (On God)
                    Havin' nightmares of goin' through your phone (21)
                    Can't even record, you got me out my zone

                    [Chorus: The Weeknd]
                    I don't wanna know
                    If you're playin' me, keep it on the low
                    'Cause my heart can't take it anymore
                    And if you creepin', please don't let it show
                    Oh, baby, I don't wanna know
                    If you're playin' me, keep it on the low
                    'Cause my heart can't take it anymore
                    And if you creepin', please don't let it show
                    Oh, baby, I don't wanna know
                    [Outro: 21 Savage & The Weeknd]
                    If you creepin', just don't let me find out (On God)
                    Get a hotel, never bring 'em to the house (On God)
                    If you're better off that way
                    Baby, all that I can say
                    If you're gonna do your thing, then don't come back to me`,
        },

        {
            id:'8',
            title: 'Intro',
            artist: 'Ariana Grande',
            description: 'a short, atmospheric track with soft melodies and dreamy vocals, setting a romantic and emotional tone.',
            cover: '../assets/Collection/R&B/ariana - intro.jpeg',
            file: '../assets/Songs/Ariana Grande – intro (end of the world).mp3',
            lyric: `[Intro]
                    Uh

                    [Verse]
                    How can I tell if I'm in the right relationship?
                    Aren't you really s'posed to know that shit?
                    Feel it in your bones and own that shit? I don't know
                    Then I had this interaction I've been thinkin' 'bout for like five weeks
                    Wonder if he's thinkin' 'bout it too and smiling
                    Wonder if he knows that that's been what's inspirin' me
                    Wonder if he's judgin' me like I am right now

                    [Pre-Chorus]
                    I don't care
                    I'd rather tell the truth (Truth)
                    Than make it worse for you, mm (You)

                    [Chorus]
                    If the sun refused to shine
                    Baby, would I still be your lover?
                    Would you want me there?
                    If the moon went dark tonight
                    And if it all ended tomorrow
                    Would I be the one on your mind, your mind, your mind?
                    And if it all ended tomorrow
                    Would you be the one on mine?`,
        },

        {
            id:'9',
            title: 'PUSH 2 START',
            artist: 'tyla',
            description: 'an energetic blend of amapiano, pop, and R&B, using car metaphors to explore love and attraction.',
            cover: '../assets/Collection/R&B/tyla - pish 2 star.jpeg',
            file: '../assets/Songs/Tyla – PUSH 2 START.mp3',
            lyric: `[Intro]
                    Ayy
                    Ayy, yeah-yeah, yeah-yeah-yeah, yeah-yeah-yeah
                    Oh

                    [Verse]
                    The way we move, uh, skin onto skin
                    No separation, need no conversation, nah, nah, nah
                    Uh, on everything
                    It's automatic, goin' zero to a hun-na-na
                    Ride, and wishin' the wheels would fall off
                    Time is tickin', it's takin' you too long
                    Right before I decide to go home

                    [Chorus]
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)

                    [Post-Chorus]
                    Mm, pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now ('Vation)
                    Pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now (Nah)
                    
                    [Bridge]
                    Come give me life, and I'll change yours
                    Who needs signs? I say, "Floor it"
                    On a high when we load it
                    Hold me, load me, hold me

                    [Chorus]
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)

                    [Post-Chorus]
                    Mm, pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now ('Vation)
                    Pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now (Nah)
                    [Outro]
                    Give me life, I'll change yours
                    Who needs signs? I say, "Floor it"
                    On a high when we load it
                    Oh`,
        },

         {
            id:'10',
            title: 'Finesse',
            artist: 'Bruno Mars',
            description: 'a fun, funky track celebrating confidence and style with a retro 90s vibe.',
            cover: '../assets/Collection/R&B/finnese.jpeg',
            file: '../assets/Songs/Bruno Mars – Finesse.mp3',
            lyric: `[Intro]
                    Ayy
                    Ayy, yeah-yeah, yeah-yeah-yeah, yeah-yeah-yeah
                    Oh

                    [Verse]
                    The way we move, uh, skin onto skin
                    No separation, need no conversation, nah, nah, nah
                    Uh, on everything
                    It's automatic, goin' zero to a hun-na-na
                    Ride, and wishin' the wheels would fall off
                    Time is tickin', it's takin' you too long
                    Right before I decide to go home

                    [Chorus]
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)

                    [Post-Chorus]
                    Mm, pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now ('Vation)
                    Pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now (Nah)
                   
                    [Bridge]
                    Come give me life, and I'll change yours
                    Who needs signs? I say, "Floor it"
                    On a high when we load it
                    Hold me, load me, hold me

                    [Chorus]
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)
                    Act like you heard me
                    Only serve it up if you deserve me, yeah
                    Pull up and earn me (Pusha, pusha)
                    Push to start (Pusha, pusha)

                    [Post-Chorus]
                    Mm, pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now ('Vation)
                    Pushin' on my buttons with no hesitation ('Tation)
                    Gas me up, give me motivation ('Vation)
                    So tell me where we goin', pick a destination ('Nation)
                    Gas me up, give me motivation now (Nah)
                    [Outro]
                    Give me life, I'll change yours
                    Who needs signs? I say, "Floor it"
                    On a high when we load it
                    Oh`,
        },
        {
            id:'11',
            title: '13',
            artist: 'Lany',
            description: '"13" by LANY is a heartfelt song that explores the pain of a fading relationship and the lingering emotions after love has changed. With its melancholic lyrics and dreamy synth-pop sound, the track captures the vulnerability and confusion of holding on to memories that no longer feel the same.',
            cover: '../assets/Home/Lany-mobile.jpeg',
            file: '../assets/Songs/LANY - 13 (Official Audio).mp3',
            lyric: ` It could change but this feels like, like the calm before the storm
                        Not that I don't wanna try but I've been here before
                        Friends in town, phone's at home, I tell myself it's fine
                        Can't remember how you taste, slept alone too many nights

                        Where did we go wrong? I know we started out alright
                        Where did we go wrong? I swear I knew we'd last this time
                        Where did we go wrong? Oh did you, did you change your mind?
                        How could you change your mind?
                        Who got inside your mind?
                        Where did we go wrong? I know we started out alright
                        Where did we go wrong? I swear I knew we'd last this time
                        Where did we go wrong? Oh did you, did you change your mind?
                        How could you change your mind?
                        Who got inside your mind?

                        Half my clothes are at your house and I don't want them back
                        The smell of you is way too much, not gonna put my heart through that
                        I don't know how much time we got, I don't know how much to say
                        I don't know, tell me what you want, I want you to want me to stay

                        Where did we go wrong? I know we started out alright
                        Where did we go wrong? I swear I knew we'd last this time
                        Where did we go wrong? Oh did you, did you change your mind?
                        How could you change your mind?
                        Who got inside your mind?
                        Where did we go wrong? I know we started out alright
                        Where did we go wrong? I swear I knew we'd last this time
                        Where did we go wrong? Oh did you, did you change your mind?
                        How could you change your mind?
                        Who got inside your mind?

                        La la la la la la la
                        La la la la oh yeah
                        La la la la la la la
                        Ooh ooh ooh

                        Where did we go wrong? I know we started out alright
                        Where did we go wrong? I swear I knew we'd last this time
                        Where did we go wrong? Oh did you, did you change your mind?
                        How could you change your mind?
                        Who got inside your mind?
                        Where did we go wrong? I know we started out alright
                        Where did we go wrong? I swear I knew we'd last this time
                        Where did we go wrong? Oh did you, did you change your mind?
                        How could you change your mind?
                        Who got inside your mind?
            `
        },
        {
            
            id:'13',
            title: 'Supernova',
            artist: 'Aespa',
            description: '"The upbeat electronic-pop “Supernova” serves as the pre-release and second title track to Aespa’s 1st full length album “Armageddon – The 1st Album.” ',
            cover: '../assets/Home/aespamobile.jpeg',
            file: '../assets/Songs/Supernova - aespa (Audio).mp3',
            lyric: `[Intro: Karina]
                    I'm like some kind of supernova
                    Watch out

                    [Verse 1: Ningning, Karina, Dem Jointz]
                    Look at me go
                    재미 좀 볼
                    빛의 core
                    So ho-o-ot, ho-o-o-ot
                    문이 열려
                    서로의 존재를 느껴
                    마치 discord
                    날 닮은 너 너 누구야 (Incoming; Drop)

                    [Pre-Chorus: Winter, Ningning, Giselle]
                    사건은 다가와, ah, oh, ayy
                    거세게 커져가, ah, oh, ayy
                    That tick, that tick, tick bomb
                    That tick, that tick, tick bomb
                    감히 건드리지 못할 걸
                    누구도 말이야
                    지금 내 안에선
                    Su-su-su-supernova
                    
                    [Chorus: All, Winter]
                    Nova
                    Can't stop hyperstellar
                    원초 그걸 찾아
                    Bring the light of a dying star
                    불러낸 내 우주를 봐 봐
                    Supernova

                    [Interlude: Karina, Giselle]
                    Ah, body bang (Bang, bang, bang, bang, bang, bang)
                    Make it feel too right

                    [Verse 2: Karina, Giselle, Winter]
                    휩쓸린 에너지, it's so special
                    잔인한 queen 이며 scene 이자 종결
                    이토록 거대한 내 안의 explosion
                    내 모든 세포 별로부터 만들어져 (Under my control, ah)

                    [Pre-Chorus: Ningning, Karina, Giselle]
                    질문은 계속돼, ah, oh, ayy
                    우린 어디서 왔나, oh, ayy
                    느껴 내 안에선 (Huh)
                    Su-su-su-supernova

                    [Chorus: All, Ningning]
                    Nova
                    Can't stop hyperstellar
                    원초 그걸 찾아
                    Bring the light of a dying star
                    불러낸 내 우주를 봐 봐
                    Supernova
                    [Bridge: Winter, Giselle, Ningning]
                    보이지 않는 힘으로
                    네게 손 내밀어 볼까
                    가능한 모든 가능성
                    무한 속의 너를 만나
                    It's about to bang, bang
                    Don't forget my name

                    [Interlude: All, Karina]
                    Su-su-su-supernova
                    사건은 다가와, ah, oh, ayy
                    거세게 커져가, ah, oh, ayy
                    질문은 계속돼, ah, oh, ayy
                    우린 어디서 왔나, oh, ayy
                    사건은 다가와, ah, oh, ayy
                    거세게 커져가, ah, oh, ayy
                    Tell me, tell me, tell me, oh, ayy
                    우린 어디서 왔나, oh, ayy
                    우린 어디서 왔나, oh, ayy

                    [Chorus]
                    Nova (Nova)
                    Can't stop hyperstellar (Hyperstellar)
                    원초 그걸 찾아
                    Bring the light of a dying star (Light of a dying star)
                    불러낸 내 우주를 봐 봐 (All the way)
                    Supernova (Hey-huh)
                    [Refrain]
                    사건은 다가와 ah, oh, ayy (Nu star)
                    거세게 커져가 ah, oh, ayy
                    질문은 계속돼 ah, oh, ayy (Nova)
                    우린 어디서 왔나 oh, ayy
                    사건은 다가와 ah, oh, ayy (Yeah-yeah-yeah-yeah-nova)
                    거세게 커져가 ah, oh, ayy (Nova)
                    질문은 계속돼 ah, oh, ayy (Bring thе light of a dying star)

                    [Outro: Winter]
                    Supernova`
        },
        {
            id:'14',
            title: 'Treasure',
            artist: 'Bruno Mars',
            description: '“Treasure” is a song by American singer-songwriter Bruno Mars. The song was written by Mars, Philip Lawrence, Ari Levine, and Phredley Brown, while production was handled by the former three as members of The Smeezingtons ',
            cover: '../assets/Home/brunomobile.jpg',
            file: '../assets/Songs/Treasure.mp3',
            lyric: `[Intro]
                    Baby squirrel, you's a sexy motherfucker

                    [Verse 1]
                    Gimme your, gimme your, gimme your attention, baby
                    I gotta tell you a little somethin' about yourself
                    You're wonderful, flawless, ooh, you a sexy lady
                    But you walk around here like you wanna be someone else

                    [Pre-Chorus]
                    Oh, woah
                    I know that you don't know it
                    But you're fine, so fine (Fine, so fine)
                    Oh, woah
                    Oh, girl, I'm gonna show you
                    When you're mine, oh, mine (Mine, oh, mine)

                    [Chorus]
                    Treasure
                    That is what you are
                    Honey, you're my golden star
                    You know you can make my wish come true
                    If you let me treasure you
                    If you let me treasure you
                    Oh, oh, oh
                   
                    [Verse 2]
                    Pretty girl, pretty girl, pretty girl, you should be smilin'
                    A girl like you should never look so blue
                    You're everything I see in my dreams
                    I wouldn't say that to you if it wasn't true

                    [Pre-Chorus]
                    Oh, woah
                    I know that you don't know it
                    But you're fine, so fine (Fine, so fine)
                    Oh, woah
                    Oh, girl, I'm gonna show you
                    When you're mine, oh, mine (Mine, oh, mine)

                    [Chorus]
                    Treasure
                    That is what you are
                    Honey, you're my golden star
                    You know you can make my wish come true
                    If you let me treasure you
                    If you let me treasure you
                    Oh, oh, oh

                    [Bridge]
                    You are my treasure
                    You are my treasure
                    You are my treasure
                    Yeah, you, you, you, you are
                    You are my treasure
                    You are my treasure
                    You are my treasure
                    Yeah, you, you, you, you are
                    [Chorus]
                    Treasure (You are my treasure)
                    That is what you are (You are my treasure)
                    (You are my treasure)
                    Honey, you're my golden star (You, you, you are)
                    (You are my treasure)
                    You know you can make my wish come true (You are my treasure)
                    (You are my treasure)
                    If you let me treasure you (You, you, you are)
                    (You are my treasure)
                    If you let me treasure you (You are my treasure)
                    Oh, oh, oh`
        },
        {
            id:'15',
            title: 'Treasure',
            artist: 'Niki',
            description: '"Take a Chance with Me" is a heartfelt song about vulnerability and the courage to open up to love. With its gentle melody and sincere lyrics, it invites someone special to take a leap of faith and explore the possibility of a meaningful connection.',
            cover: '../assets/Home/niki.jpg',
            file: '../assets/Songs/NIKI - Take A Chance With Me (Official Lyric Video).mp3',
            lyric: `[Verse 1]
                    His laugh you'd die for, his laugh you'd die for
                    The kind that colors the sky
                    Heart intangible
                    Slips away faster than dandelion fluff in the sunlight
                    And he's got swirls of passion in his eyes
                    Uncovering the dreams, he dreams at night
                    As much and hard as he tries to hide
                    I can see right through, see right through

                    [Verse 2]
                    His voice you'd melt for, he says my name like
                    I'll fade away somehow if he's too loud
                    What I would give for me to get my feet
                    Back on the ground, head off the clouds
                    I laugh at how we're polar opposites
                    I read him like a book, and he's a clueless littlе kid
                    Doesn't know that I'd stop time and space
                    Just to makе him smile, make him smile

                    [Chorus]
                    Oh, why can't we for once
                    Say what we want, say what we feel?
                    Oh, why can't you for once
                    Disregard the world, and run to what you know is real?
                    Take a chance with me, take a chance with me
                    
                    [Verse 3]
                    His kiss you'd kill for
                    Just one and you're done for
                    Electricity surging in the air
                    He drives me crazy, it's so beyond me
                    How he'd look me dead in the eye and stay unaware

                    [Pre-Chorus]
                    That I'm hopelessly captivated
                    By a boy who thinks love’s overrated
                    How did I get myself in this arrangement?
                    It baffles me, too, baffles me, too

                    [Chorus]
                    Oh, why can't we for once
                    Say what we want, say what we feel?
                    Oh, why can't you for once
                    Disregard the world, and run to what you know is real?

                    [Bridge]
                    In the end, we only regret
                    The chances we didn't take
                    I'll be your safety net
                    So, why not raise the stakes?
                    And I can hear your heart from across the room
                    Pulsing through my veins
                    I know you need this, too
                    Lie to me all you please
                    I can see right through
                    See right through
                    [Chorus]
                    Oh, why can't we for once
                    Say what we want, say what we feel?
                    Oh, why can't you for once
                    Disregard the world, and run to what you know is real?
                    Oh, why can’t we for once
                    Say what we want, say what we feel?
                    Oh, why can't you for once
                    Disregard the world, and run to what you know is real?
                    Take a chance with me, take a chance with me`
        },
        {
            id:'16',
            title: 'OMG',
            artist: 'New Jeans ',
            description: '"OMG" by NewJeans is a catchy K-pop track that blends R&B and hip-hop influences to express the excitement and confusion of young love.',
            cover: '../assets/Home/newjeans.jpeg',
            file: '../assets/Songs/OMG (Audio).mp3',
            lyric:`[Intro: Hanni]
                    이 노래는 it's about you, baby
                    Only you
                    You, you, you
                    You, you, you, you

                    [Verse 1: Haerin, Minji, Danielle]
                    내가 힘들 때 울 것 같을 때 (Mm-hm)
                    기운도 이젠 나지 않을 때 (Mm-hm)
                    It's you, 날 걱정하네, it's you, 날 웃게하네
                    말 안 해도 돼, boy, what do you say?

                    [Pre-Chorus: Hyein, Danielle, Minji, Haerin]
                    (They keep on asking me, "Who is he?")
                    멀리든 언제든지 달려와
                    (They keep on asking me, "Who is he?")
                    바쁜 척도 없이 넌 나타나
                    (They keep on asking me, "Who is he?")
                    이게 말이 되니 난 물어봐
                    (They keep on asking me, "Who is he?")
                    너는 말야, he's the one that's living in my system, baby

                    [Chorus: Hanni, Danielle]
                    Oh my, oh my God, 예상했어 나
                    I was really hoping that he will come through
                    Oh my, oh my God, 단 너뿐이야
                    Asking all the time about what I should do
                    
                    [Post-Chorus: Haerin, Hyein, Hanni]
                    No, I can never let him go (Ooh)
                    너만 생각나, twenty-four (Ooh)
                    난 행운아야 정말로 (Ooh)
                    I know, I know (Ooh)
                    널 알기 전까지는 나 (Ooh)
                    의미 없었어 전부 다 (Ooh)
                    내 맘이 끝이 없는 걸 (Ooh)
                    I know, I know, I'm going crazy, right?

                    [Verse 2: Minji, Danielle, Hanni]
                    어디서든, 몇 번이든
                    There ain't nothing else that I would hold on to
                    I hear his voice through all the noise
                    잠시라도 내 손 놓지 마, no, no
                    걱정 없잖아
                    'Cause I got someone
                    혼자라도 괜찮아
                    'Cause I love someone

                    [Pre-Chorus: Hyein, Hanni, Danielle, Minji]
                    (They keep on asking me, "Who is he?")
                    멀리든 언제든지 달려와
                    (They keep on asking me, "Who is he?")
                    바쁜 척도 없이 넌 나타나
                    (They keep on asking me, "Who is he?")
                    이게 말이 되니 난 물어봐
                    (They keep on asking me, "Who is he?")
                    너는 말야, he's the one that's living in my system, baby
                    [Chorus: Hanni, Danielle]
                    Oh my, oh my God, 예상했어 나
                    I was really hoping that he will come through
                    Oh my, oh my God, 단 너뿐이야
                    Asking all the time about what I should do

                    [Post-Chorus: Haerin, Hyein]
                    No, I can never let him go (Ooh)
                    너만 생각나, twenty-four (Ooh)
                    난 행운아야 정말로 (Ooh)
                    I know, I know (Ooh)
                    널 알기 전까지는 나 (Ooh)
                    의미 없었어 전부 다 (Ooh)
                    내 맘이 끝이 없는 걸 (Ooh)
                    I know, I know (He's the one that's living in my system, baby, baby)

                    [Interlude: Haerin, Hanni, All]
                    Baby
                    Babe, baby
                    I'm going crazy, right? (Baby)
                    Baby
                    I'm going crazy, right?
                    Babe, baby
                    너와 나

                    [Bridge: Hanni, Hyein, Danielle]
                    My heart is glowing, it's glowing up (Glow, glow)
                    너랑만 있으면 무서울 게 없어 (No, no)
                    가득 메워진, 다 메워진 (붉어진)
                    My heart is glowing, it'd be glowing
                    'Cause he
                    [Chorus: Hanni, Danielle]
                    Oh my, oh my God, 예상했어 나
                    I was really hoping that he will come through
                    Oh my, oh my God, 단 너뿐이야
                    Asking all the time about what I should do (너와 나)

                    [Post-Chorus: Minji, Hyein, Haerin]
                    No, I can never let him go (Ooh)
                    He's right there for me, twenty-four (Ooh)
                    난 행운아야 정말로 (Ooh)
                    I know, I know (너와 나)
                    널 알기 전까지는 나 (Ooh)
                    의미 없었어 전부 다 (Ooh)
                    어떡해
                    My heart is glowing, it's glowing
                    My heart is glowing up so I can't sleep at night`
        },
        
        {
            id: '17',
            title:'Power Trip',
            artist:'J.Cole',
            description:'According to Cole himself the song has a double meaning, with the song not only about his love for a girl, but his love for hip-hop and how it’s got him up all night trying to create chart topping love songs.',
            cover:'../assets/Home/jcole.jpeg',
            file:'../assets/Songs/Power Trip.mp3',
            lyric:
            `[Chorus 1: J. Cole]
            Got me up all night
            All I'm singin' is love songs
            She got me up all night
            Constant drinkin' and love songs
            She got me up all night
            Down-and-out with these love songs
            She got me up all night
            Drownin' out with these love songs
            She got me up all night (Yeah)
            All I'm singin' is love songs
            She got me up all night (Yeah)
            Constant drinkin' and love songs
            She got me up all night (Yeah)
            Down-and-out with these love songs
            She got me open all night (Uh-huh)
            Got me open all night, hey

            [Verse 1: J. Cole]
            Okay, back when I was sleeping in my mama crib
            Or even back when I was up there in Mohammed crib
            Paying seventeen hundred for the rent, money well spent
            No heater, but a nigga made heat, may I vent?
            Had a thing for ya, even wrote the song "Dreams" for ya
            ‘Cause I had dreams for ya, thoughts of a ring for ya
            Childish shit, you know child and shit
            Anonymous flowers sent, you know coward shit
            Now a nigga signed to Hov, took a power trip
            Back home, I'm grown now, and the city's my throne now, huh
            The same clubs that I used to get tossed out
            Life got Kriss Kross'd: totally crossed out
            ‘Cause now I'm in this bitch and I'm totally bossed out
            Old chicks crying ‘cause they know that they lost out
            But I'm still on you, I'm still on you
            My drink spill on me, while I feel on you, I'm sayin'—
            
            [Pre-Chorus: Miguel]
            Would you believe me if I said I'm in love?
            Baby, I want you to want me
            Would you believe me if I said I'm in love?
            Baby, I want ya

            [Chorus 2: J. Cole]
            And we are, we are, we are
            Got me up all night
            And we are, we are, we are
            All I'm singin' is love songs
            And we are, we are, we are
            Got me up all night
            And we are, we are, we are (She got me)
            And we are, we are, we are (She got me)

            [Verse 2: J. Cole]
            Well, this has got to be the longest crush ever
            If I ever get to fuck it'd be the longest bust ever
            Love is a drug, like the strongest stuff ever and
            Fuck it, I'm on one, you feel me?
            She on a power trip, she got me where she want a nigga
            Wife'ing in the club, man, my homies gon' disown a nigga
            Like, "Give me twenty dollars, dollars!"
            Ass stupid, how you get to college, college?
            I'm in your city and I'm wonderin' if you're home now
            Went and found a man, but I'm hopin' you're alone now
            Can't help but feeling like I dropped the ball, cliché
            I used to pop up on you at the mall each day
            Now, typically I kick game like Eastbay
            But you got a nigga freeze-framed yelling: "Please play!"
            For Pete's sake, homie, pull it together
            Just fuck her one time and be through with forever, but—
            [Pre-Chorus: Miguel]
            Would you believe me if I said I'm in love?
            Baby, I want you to want me
            Would you believe me if I said I'm in love?
            Baby, I want ya, yeah

            [Chorus 2: J. Cole]
            And we are, we are, we are
            Got me up all night
            And we are, we are, we are
            All I'm singin' is love songs
            And we are, we are, we are
            Got me up all night
            And we are, we are, we are (She got me)
            And we are, we are, we are (She got me)

            [Chorus 1: J. Cole]
            Got me up all night (All night)
            All I'm singin' is love songs
            She got me up all night (All night)
            Constant drinkin' and love songs
            She got me up all night (All night)
            Down-and-out with these love songs
            She got me up all night (All night)
            Drownin' out with these love songs
            She got me up all night (Yeah)
            All I'm singin' is love songs
            She got me up all night (Yeah)
            Constant drinkin' and love songs
            She got me up all night (Yeah)
            Down-and-out with these love songs
            She got me open all night (Uh-huh)
            Got me open all night, hey
            [Outro: J. Cole]
            Back when I was sleeping in my mama crib
            *Space Bar Tap*

            [Produced by J. Cole]`
        },

        {
            id:'18',
            title: 'Suicidal',
            artist: 'YNW Melly',
            description: '"Suicidal" by YMW OMG is an emotional song that explores the pain of heartbreak and mental struggle through raw, confessional lyrics.',
            cover: '../assets/Home/melly.jpeg',
            file: '../assets/Songs/YNW Melly - Suicidal [Official Audio].mp3',
            lyric:`[Intro]
                    Suicidal
                    Your love is suicidal
                    Lately, I've been feeling suicidal
                    Your love is suicidal

                    [Pre-Chorus]
                    I thought that we were meant to be
                    You took my heart and made it bleed
                    I gave you all my ecstasy
                    I know you'll be the death of me (Keep it Z3N)
                    Left lipstick on my Hennessy
                    Felt like you took my soul from me
                    You gave me all your ecstasy
                    I thought that we were meant to be

                    [Chorus]
                    Your love is suicidal
                    For me, your love is suicidal
                    To me, your love is suicidal
                    To me, your love is suicidal

                    [Refrain]
                    I'm sippin' Hennessy-'y-'y, ooh
                    I'm sippin' Hennessy-'y-'y, ooh
                    
                   
                    [Verse]
                    I don't want to lose my conscience
                    Drinkin' all this Hennessy
                    Baby, you took control of me
                    And I got too many enemies
                    I knew you wanted to fuck him 'cause I could just tell
                    Check my back, now I'm, now I'm in my bag, yeah
                    You did me bad (Yeah), you did me bad (Yeah)
                    But I said, "Fuck it," and I ran up my bag, yeah
                    I'm in my bag, I'm in my bag now
                    But you didn't even put it all on the line
                    For me, no, oh, I'm sorry
                    This is the end of us
                    It's crazy 'cause my heart is dangerous
                    Felt like you took my soul from me
                    Like the devil got a hold on me
                    Everybody wishin' bad on me
                    Everybody wishin' bad on me
                    You taught a lesson to me that I had to learn
                    And I'm so sorry 'cause you let our bridges burn
                    I said I loved you and I wish I never did
                    I swear to God, I swear to God, you stupid bitch

                    [Pre-Chorus]
                    I thought that we were meant to be
                    You took my heart and made it bleed
                    I gave you all my ecstasy
                    I know you'll be the death of me
                    Left lipstick on my Hennessy
                    Felt like you took my soul from me
                    No way, I gave you all my ecstasy
                    I thought that you were meant for me
                    I know you'll be the death of me
                    Thought we were for eternity
                    You fucked me up, both physically
                    And mentally, I can't believe
                    [Refrain]
                    I'm sippin' Hennessy-'y-'y, ooh
                    I'm sippin' Hennessy-'y-'y, ooh
                    I'm sippin' Hennessy-'y-'y, ooh
                    I'm sippin' Hennessy-'y-'y, ooh

                    [Chorus]
                    Your love is suicidal
                    For me, your love is suicidal
                    To me, your love is suicidal
                    To me, your love is suicidal

                    [Outro]
                    You taught a lesson to me that I had to learn
                    And I'm so sorry 'cause you let our bridges burn
                    I said I loved you and I wish I never did
                    I swear to God, I swear to God, you stupid bitch`
        },
        {
            id: '19',
            title:'Snooze',
            artist:'SZA',
            description:'“Snooze” features SZA trying to be with a person who she loves so much. ',
            cover:'../assets/Home/sza.jpeg',
            file:'../assets/Songs/SZA - Snooze (Audio).mp3',
            lyric: `[Intro]
                    Ooh
                    I think I know

                    [Verse 1]
                    I'll touch that fire for you
                    I do that three, four times again, I testify for you
                    I told that lie, I'd kill that bitch
                    I do what all of them around you scared to do, I'm not
                    Long as you juggin' out here for me, I got it
                    Mobbin', schemin', lootin', hide your bodies
                    Long as you dreamin' 'bout me, ain't no problem
                    I don't got nobody, just with you right now
                    Tell the truth, I look better under you

                    [Chorus]
                    I can't lose when I'm with you
                    How can I snooze and miss the moment?
                    You just too important
                    Nobody do body like you do
                    I can't lose when I'm with you
                    I can't just snooze and miss the moment
                    You just too important
                    Nobody do body like you do, you do

                    [Verse 2]
                    In a droptop ride with you, I feel like Scarface (Scarface)
                    Like that white bitch with the bob, I'll be your main one (Your main one)
                    Lеt's take this argument back up to my place (My placе)
                    Sex remind you I'm nonviolent, I'm your day one (Day one)
                    We ain't have shit yet, it was magic, yeah
                    Smash and grab shit, yeah
                    Nasty habits take a hold when you not here
                    Ain't a home when you not here
                    Hard to grow when you not here, I'm sayin'
                
                    [Chorus]
                    I can't lose when I'm with you
                    How can I snooze and miss the moment?
                    You just too important
                    Nobody do body like you do
                    I can't lose when I'm with you
                    How can I snooze and miss the moment?
                    You just too important
                    Nobody do body like you do, you do

                    [Bridge]
                    Main one ridin'
                    How you frontin' on me and I'm the main one tryin'?
                    How you blame it on me and you the main one lyin'?
                    How you threatenin' to leave and I'm the main one cryin'?
                    Just tryna be your everything
                    Main one ridin'
                    How you frontin' on me and I'm the main one tryin'?
                    How you blame it on me and you the main one lyin'?
                    How you threatenin' to leave and I'm the main one cryin'?

                    [Chorus]
                    I can't lose when I'm with you (Like you, like you)
                    How can I snooze and miss the moment? (Like you)
                    You just too important
                    Nobody do body like you do
                    I can't lose when I'm with you (Like you)
                    How can I snooze and miss the moment? (Like you)
                    You just too important
                    Nobody do body like you do, you do
                    [Outro]
                    Nah, nah, nah, nah
                    I think I know, woah
                    See, no, I can't lose, oh
                    I think I know, oh`
                
        },
        {
            id: '20',
            title:'We Don\'t Talk Anymore',
            artist:'Charlie Puth',
            description:'"We Don’t Talk Anymore" by Charlie Puth is a melancholic duet about drifting apart from someone you once loved, filled with regret and longing.',
            cover:'../assets/Songs/Charlie Puth - We Don\'t Talk Anymore (feat. Selena Gomez).mp3',
            file:'',
            lyrics:`[Chorus: Charlie Puth]
            We don't talk anymore, we don't talk anymore
            We don't talk anymore like we used to do
            We don't love anymore
            What was all of it for?
            Oh, we don't talk anymore like we used to do

            [Verse 1: Charlie Puth]
            I just heard you found the one you've been looking
            You've been looking for
            I wish I would have known that wasn't me
            'Cause even after all this time, I still wonder
            Why I can't move on
            Just the way you did so easily

            [Pre-Chorus: Charlie Puth]
            Don't wanna know
            What kinda dress you're wearin' tonight
            If he's holdin' onto you so tight
            The way I did before
            I overdosed
            Should've known your love was a game
            Now I can't get you outta my brain
            Ooh, it's such a shame

            [Chorus: Charlie Puth]
            That we don't talk anymore, we don't talk anymore
            We don't talk anymore like we used to do
            We don't love anymore
            What was all of it for?
            Oh, we don't talk anymore like we used to do
        
            Taylor Swift
            [Verse 2: Selena Gomez]
            I just hope you're lyin' next to somebody
            Who knows how to love you like me
            There must be a good reason that you're gone
            Every now and then, I think you
            Might want me to come show up at your door
            But I'm just too afraid that I'll be wrong

            [Pre-Chorus: Selena Gomez]
            Don't wanna know
            If you're lookin' into her eyes
            If she's holdin' onto you so tight
            The way I did before
            I overdosed
            Should've known your love was a game
            Now I can't get you outta my brain
            Ooh, it's such a shame

            [Chorus: Charlie Puth & Selena Gomez, Charlie Puth]
            That we don't talk anymore, we don't talk anymore
            (We don't, we don't, we don't, we don't)
            We don't talk anymore like we used to do
            We don't love anymore
            What was all of it for?
            (We don't, we don't, we don't, we don't)
            Oh, we don't talk anymore like we used to do
            Like we used to do
            [Pre-Chorus: Charlie Puth, Selena Gomez]
            Don't wanna know
            What kinda dress you're wearin' tonight
            If he's givin' it to you just right
            The way I did before
            I overdosed
            Should've known your love was a game
            Now I can't get you outta my brain
            Oh, it's such a shame

            [Chorus: Charlie Puth & Selena Gomez]
            That we don't talk anymore, we don't talk anymore
            (We don't, we don't, we don't, we don't)
            We don't talk anymore like we used to do
            We don't love anymore
            What was all of it for?
            (We don't, we don't, we don't, we don't)
            Oh, we don't talk anymore like we used to do

            [Post-Chorus: Charlie Puth, Selena Gomez, Charlie Puth & Selena Gomez]
            We don't talk anymore, oh, oh
            (Don't wanna know)
            (What kind of dress you're wearin' tonight)
            (If he's holdin' onto you so tight)
            The way I did before
            We don't talk anymore, oh, woah
            (I overdosed, should've known your love was a game)
            (Now I can't get you outta my brain)
            Oh, it's such a shame
            That we don't talk anymore`
            
        },
        {
            id: '21',
            title:'Double Take',
            artist:'Dhruv',
            description:'"Double Take" by Dhruv is a soft, dreamy confession of unexpectedly falling in love with a close friend, laced with tender vulnerability.',
            cover:'',
            file:'../assets/Songs/Dhruv - double take.mp3',
            lyric:
            `[Intro]
            Ooh-ooh-ooh-ooh
            Ooh-ooh-ooh
            Ooh-ooh-ooh-ooh

            [Verse 1]
            I could say I never dare
            To think about you in that way
            But, I would be lying
            And I pretend I'm happy for you
            When you find some dude to take home
            But I won't deny that

            [Pre-Chorus]
            In the midst of the crowds
            In the shapes, in the clouds
            I don't see nobody but you
            In my rose-tinted dreams
            Wrinkled silk on my sheets
            I don't see nobody but you

            [Chorus]
            Boy, you got me hooked onto somethin'
            Who could say that they saw us comin'?
            Tell me, do you feel the love?
            Spend a summer or a lifetime with me
            Let me take you to the place of your dreams
            Tell me, do you feel the love?
            Ooh-ooh-ooh-ooh
            [Verse 2]
            And I could say I never unzipped
            Those blue Levi's inside my head
            But that's far from the truth
            Don't know what's come over me
            It seems like yesterday when I said
            “We'll be friends forever”

            [Pre-Chorus]
            Constellations of stars
            Murals on city walls
            I don't see nobody but you
            You're my vice, you're my muse
            You're a nineteenth floor view
            I don't see nobody but you

            [Chorus]
            Boy, you got me hooked onto somethin'
            Who could say that they saw us comin'?
            Tell me, do you feel the love?
            Spend a summer or a lifetime with me
            Let me take you to the place of your dreams
            Tell me, do you feel the love?

            [Chorus]
            Boy, you got me hooked onto somethin'
            Who could say that they saw us comin'?
            Tell me, do you feel the love?
            Spend a summer or a lifetime with me
            Let me take you to the place of your dreams
            Tell me, do you feel the love?
            [Outro]
            Do you feel the love? (Ooh-ooh-ooh-ooh)
            Do you feel the love?
            Do you feel the love?
            Do you feel the love?
            Feel the love
            Feel the love`
        },

        {
            id: '22',
            title:'20 Min',
            artist:'Lil Uzi Vert',
            description:'"20 Min" by Lil Uzi Vert is a fast-paced track reflecting themes of fleeting relationships, self-confidence, and emotional detachment.',
            cover:'',
            file:'../assets/Songs/Lil Uzi Vert - 20 Min',
            lyric:
            `[Pre-Chorus]
            I said, "Girl, why you keep callin'?"
            I said, "Girl, why you keep callin'?", yeah
            She said, "I need a new whip," yeah
            "'Cause I know that you still ballin'"
            She just wanna go back to the future, so I brought that girl a DeLorean
            Twenty-one minutes until I got' go, so I told that girl I'm gonna slaughter it

            [Chorus]
            I met that girl right up at my show, left her man in the crowd on the floor
            Out of town never saw her before, told her, "Baby, we don't got that long"
            Listen, this not my city show, but I treat it like my city show
            Twenty more minutes until I'm on, twenty more minutes until I'm on (Yeah)
            Twenty more minutes until I'm on, twenty more minutes until I'm on
            Twenty more minutes until I'm on, twenty more minutes until I'm on
            Yeah, I am not slow, these girls just want me 'cause I got the dough
            Pass that girl right on my friend, give and go (What?)
            He pass me her friend, so they switchin' roles (Yeah, yeah)

            [Verse 1]
            I hit it fast (Fast), yeah, I hit it slow (Slow, slow)
            But by the mornin', girl, I gotta go (Go, yeah)
            Gotta get ready, tonight is my show
            If you okay, you might open my show
            Got the big pointers right under my nose (Skrrt)
            These niggas mad 'cause I got all the dough
            These niggas mad 'cause I got all the dough (Yeah)
            Changin' my style 'cause I got every flow (What?)
            Got every girl, ain't no toppin' my hoes (Yeah)
            I understand that is your girlfriend, bro
            But you know I gotta keep her close
            Open your legs, do not keep 'em closed
            Livin' life on the edge, on a tightrope
            I am so clean, I might start movin' soap (Yeah)
            Drive a new 'Rari, I don't need a note (Skrrt)
            Drive a Bugatti like it's a Volvo
            I got your girl and you already know (Skrrt)
            Don't really like her, we friends for the most
            Cuban link tri-color, all on my choker (Yeah, skrrt)
            Don't leave the crumb, got the bread, then you toast
            If you start touchin' my gun, got no holst'
            I put a coat on the top of my coat
            Only twenty minutes before the show (Show)
            See upcoming rap shows
            Get tickets for your favorite artists
            You might also like
            BACKD00R
            Playboi Carti
            Rah Tah Tah
            Tyler, The Creator
            6:16 in LA
            Kendrick Lamar
            [Chorus]
            I met that girl right up at my show, left her man in the crowd on the floor
            Out of town, never saw her before, told her, "Baby, we don't got that long"
            Listen, this not my city show, but I treat it like my city show
            Twenty more minutes until I'm on, twenty more minutes until I'm on (Yeah)
            Twenty more minutes until I'm on, twenty more minutes until I'm on
            Twenty more minutes until I'm on, twenty more minutes until I'm on
            Yeah, I am not slow, these girls just want me, 'cause I got the dough
            Pass that girl right on my friend, give and go (What?)
            He pass me her friend, so they switchin' roles (Yeah, yeah)

            [Verse 2]
            Damn, I just started it (Started), man, I just started it (Started)
            Oh my God, please, do not bother me
            Don't got enough just to order me (Yeah)
            I'm on that tree like an ornament
            Money so long like accordion (Woo)
            You lied to me, wasn't sorry then
            On the weekend, you was partyin'
            It was just me, you was targetin' (Yeah)
            It was just me, you was targetin' (Target)
            Jump in the Porsche, I might target it (Skrrt)
            Jump in the Lamb', I ain't parkin' it (Skrrt)
            Ice is so cold, I snowboard in it (Blaow)
            Go to my show, they applaud me in
            She call my phone with emergency (Ayy)
            She call my phone with that urgency (Ayy)
            [Pre-Chorus]
            I said, "Girl, why you keep callin'?" (Woo, ayy)
            I said, "Girl, why you keep callin'?", yeah
            She said, "I need a new whip," yeah (Skrrt)
            "'Cause I know that you still ballin'" (Ball)
            She just wanna go back to the future, so, I brought that girl a DeLorean (Yah)
            Twenty-one minutes until I got' go, so, I told that girl that I'm gonna slaughter it (Yeah)

            [Chorus]
            I met that girl right up at my show, left her man in the crowd on the floor
            Out of town, never saw her before, told her, "Baby, we don't got that long"
            Listen, this not my city show, but I treat it like my city show
            Twenty more minutes until I'm on, twenty more minutes until I'm on (Yeah)
            Twenty more minutes until I'm on, twenty more minutes until I'm on
            Twenty more minutes until I'm on, twenty more minutes until I'm on
            Yeah, I am not slow, these girls just want me, 'cause I got the dough
            Pass that girl right on my friend, give and go (What?)
            He pass me her friend, so they switchin' roles (Yeah, yeah)`
        },

        {
            id: '23',
            title:'Ditto',
            artist:'New Jeans',
            description:'"Ditto" by NewJeans is a nostalgic and emotional K-pop song about longing for reciprocated feelings and holding onto fading memories.',
            cover:'../assets/Home/ditto.jpeg',
            file:'../assets/Songs/Ditto.mp3',
            lyric:
            `[Chorus: Haerin, Minji]
            Stay in the middle
            Like you a little, don't want no riddle
            Malhaejwo, say it back, oh, say it ditto
            Achimeun neomu meoreo so say it ditto
            I don't want to
            Walk in this miro
            Da aneun geon anieodo baradeon daero
            Malhaejwo, say it back, oh, say it ditto
            I want you so, want you, so say it ditto

            [Verse 2: Danielle]
            Not just anybody
            Neoreul sangsanghaetji
            Hangsang daaitdeon
            Cheoeum neukkim geudaero nan
            Gidaryeotji all this time

            [Pre-Chorus: Hyein, Haerin]
            I got nothing to lose
            Neol joahandago, ooh-woah, ooh-woah, ooh-woah
            Ra-ta-ta-ta, ullin simjang (Ra-ta-ta-ta)
            But I don't want to

            [Chorus: Hanni, Minji]
            Stay in the middle
            Like you a little, don't want no riddle
            Malhaejwo, say it back, oh, say it ditto
            Achimeun neomu meoreo so say it ditto
            I don't want to
            Walk in this miro
            Da aneun geon anieodo baradeon daero
            Malhaejwo, say it back, oh, say it ditto
            I want you so, want you, so say it ditto
            [Outro: Hyein]
            Hoo-ooh, ooh-ooh
            Hoo-ooh, hoo`
        },

        {
            id: '24',
            title:'Saturday Nights',
            artist:'Khalid',
            description:'"Saturday Nights" by Khalid is a gentle ballad about love, pain, and the unseen struggles behind a seemingly perfect exterior.',
            cover:'../assets/Home/khalid.jpeg',
            file:'../assets/Songs/Khalid - Saturday Nights (Official Audio).mp3',
            lyric:
            `[Verse 1]
            Saturday nights, blueberry cigarillos
            Swishers make my throat hurt
            Rolling OCB's on the side for me
            Light 'em up and let 'em both burn
            Family feuds, say your mom's confused
            Off of shit she doesn't wanna learn
            But daddy's gone, say he's never home
            And wishing only makes it worse

            [Pre-Chorus]
            I guess there's certain dreams that you gotta keep
            'Cause they'll only know what you let 'em see

            [Chorus]
            All the things that I know
            That your parents don't
            They don't care like I do
            Nowhere like I do
            And all the things that I know
            That your parents don't
            They don't care like I do
            Nowhere like I do
            Nowhere like I do
            Nowhere like I do
            See Khalid Live
            Get tickets as low as $103
            [Verse 2]
            Saturday nights, light gray Silverado
            You drive it 'cause you have to
            Stay up working late at a job you hate
            Fix your makeup in a dirty bathroom
            No more love, in and out of clubs
            Knowing what you gotta do
            You've got plans wrapped in rubber bands
            And that's the only thing you'll never lose

            [Pre-Chorus]
            I guess there's certain dreams that you gotta keep
            'Cause they'll only know what you let 'em see

            [Chorus]
            All the things that I know
            That your parents don't
            They don't care like I do
            Nowhere like I do
            And all the things that I know
            That your parents don't
            They don't care like I do
            Nowhere like I do
            Nowhere like I do

            [Bridge]
            'Cause I care, I care about you
            There's nowhere I'd rather be
            Than right here around you
            I care, care about you
            There's nowhere I'd rather be
            [Chorus]
            All the things that I know
            That your parents don't
            They don't care about you
            Nowhere like I do
            All the things that I know
            That your parents don't
            Don't care about you
            Nowhere like I
            Nowhere like I do (Do, do, do)
            Nowhere like I do (Do, do, do)
            Nowhere like I do (Do, do, do)
            Nowhere like I do (Do, do, do)`
        },

        {
            id: '25',
            title:'I Fall Apart',
            artist:'Post Malone',
            description:'"I Fall Apart" by Post Malone is a raw, emotional expression of heartbreak and vulnerability after betrayal in a relationship.',
            cover:'../assets/Home/post.jpeg',
            file:'../assets/Songs/I Fall Apart (1).mp3',
            lyric:
            `[Intro]
            Ooh, I fall apart
            Ooh, yeah, mmm, yeah

            [Verse 1]
            She told me that I'm not enough (Yeah)
            And she left me with a broken heart (Yeah)
            She fooled me twice and it's all my fault (Yeah)
            She cut too deep, now she left me scarred (Yeah)
            Now there's so many thoughts goin' through my brain (Yeah)
            And now I'm takin' these shots like it's Novocaine, yeah

            [Chorus]
            Ooh, I fall apart
            Down to my core
            Ooh, I fall apart
            Down to my core
            Ooh, didn't know it before
            Surprised when you caught me off guard
            All this damn jewelry I bought
            You was my shorty, I thought

            [Verse 2]
            Never caught a feelin' this hard
            Harder than the liquor I pour
            Tell me you don't want me no more
            But I can't let go, everybody told me so
            Feelin' like I sold my soul
            Devil in the form of a whore
            Devil in the form of a whore
            You said it, no, you said it
            No, you said that shit, we'd be together, oh
            [Chorus]
            Ooh, I fall apart
            Down to my core
            Ooh, I fall apart
            Down to my core
            Ooh, didn't know it before
            Surprised when you caught me off guard
            All this damn jewelry I bought
            You was my shorty, I thought

            [Bridge]
            Ice keep pourin' and the drink keep flowin'
            Try to brush it off, but it keep on goin'
            Covered in scars and I can't help showin'
            Whippin' in the foreign and the tears keep rollin'
            Ice keep droppin' and the drink keep flowin'
            Try to brush it off, but it keep on goin'
            All these scars, can't help from showin'
            Whippin' in the foreign and the tears keep blowin', yeah

            [Chorus]
            Ooh, I fall apart
            Down to my core
            Ooh, I fall apart
            Down to my core
            Ooh, didn't know it before
            Surprised when you caught me off guard
            All this damn jewelry I bought
            You was my shorty, I thought`
        },

        {
            id: '26',
            title:'Waiting for Love',
            artist:'avicii',
            description:'"Waiting for Love" by Avicii is an uplifting anthem about hope, resilience, and holding on until you find love and purpose.',
            cover:'../assets/Home/avici.jpeg',
            file:'../assets/Songs/Avicii - Waiting For Love (Lyric Video).mp3',
            lyric:
            `[Verse 1]
            Where there's a will, there's a way, kinda beautiful
            And every night has its day, so magical
            And if there's love in this life, there's no obstacle
            That can't be defeated
            For every tyrant a tear for the vulnerable
            In every lost soul the bones of a miracle
            For every dreamer a dream we're unstoppable
            With something to believe in

            [Chorus]
            Monday left me broken
            Tuesday I was through with hopin'
            Wednesday my empty arms were open
            Thursday waiting for love, waiting for love
            Thank the stars it's Friday
            I'm burning like a fire gone wild on Saturday
            Guess I won't be coming to church on Sunday
            I'll be waiting for love
            Waiting for love to come around

            [Instrumental Break]

            [Verse 2]
            We are one of a kind, irreplaceable
            How did I get so blind and so cynical?
            If there's love in this life we're unstoppable
            No, we can't be defeated
            [Chorus]
            Monday left me broken
            Tuesday I was through with hopin'
            Wednesday my empty arms were open
            Thursday waiting for love, waiting for love
            Thank the stars it's Friday
            I'm burning like a fire gone wild on Saturday
            Guess I won't be coming to church on Sunday
            I'll be waiting for love
            Waiting for love to come around`
        },

        {
            id: '27',
            title:'Viva La Vida',
            artist:'Coldplay',
            description:'"Viva La Vida" by Coldplay is a poetic tale of a fallen king, symbolizing loss, change, and reflection on past power and glory.',
            cover:'../assets/Home/coldplay.jpeg',
            file:'../assets/Songs/Coldplay - Viva la Vida.mp3',
            lyric:
            `[Verse 1: Chris Martin]
            I used to rule the world
            Seas would rise when I gave the word
            Now in the mornin', I sleep alone
            Sweep the streets I used to own

            [Verse 2: Chris Martin]
            I used to roll the dice
            Feel the fear in my enemy's eyes
            Listen as the crowd would sing
            "Now the old king is dead, long live the king"
            One minute, I held the key
            Next, the walls were closed on me
            And I discovered that my castles stand
            Upon pillars of salt and pillars of sand

            [Chorus: Chris Martin]
            I hear Jerusalem bells a-ringin'
            Roman cavalry choirs are singin'
            Be my mirror, my sword and shield
            My missionaries in a foreign field
            For some reason, I can't explain
            Once you'd gone, there was never
            Never an honest word
            And that was when I ruled the world
            [Verse 3: Chris Martin]
            It was a wicked and wild wind
            Blew down the doors to let me in
            Shattered windows and the sound of drums
            People couldn't believe what I'd become
            Revolutionaries wait
            For my head on a silver plate
            Just a puppet on a lonely string (Mmm, mmm)
            Aw, who would ever wanna be king?

            [Chorus: Chris Martin]
            I hear Jerusalem bells a-ringin'
            Roman cavalry choirs are singin'
            Be my mirror, my sword and shield
            My missionaries in a foreign field
            For some reason, I can't explain
            I know Saint Peter won't call my name
            Never an honest word
            But that was when I ruled the world

            [Bridge: Brian Eno, Guy Berryman, Jonny Buckland & Will Champion]
            Oh-oh-oh, oh-oh, oh
            Oh-oh-oh, oh-oh, oh
            Oh-oh-oh, oh-oh, oh
            Oh-oh-oh, oh-oh, oh
            [Chorus: Chris Martin, Brian Eno, Guy Berryman, Jonny Buckland & Will Champion]
            (Oh-oh-oh, oh-oh, oh)
            Hear Jerusalem bells a-ringin'
            (Oh-oh-oh, oh-oh, oh)
            Roman cavalry choirs are singin'
            (Oh-oh-oh, oh-oh, oh)
            Be my mirror, my sword and shield
            (Oh-oh-oh, oh-oh, oh)
            My missionaries in a foreign field
            (Oh-oh-oh, oh-oh, oh)
            For some reason, I can't explain
            (Oh-oh-oh, oh-oh, oh)
            I know Saint Peter won't call my name
            Never an honest word
            But that was when I ruled the world

            [Outro]
            Mmm, mmm, mmm, mmm
            Mmm, mmm, mmm, mmm
            Mmm, mmm`
        },

        {
            id: '28',
            title:'Jocelyn Flores',
            artist:'XXXTENTACION',
            description:'"Jocelyn Flores" by XXXTENTACION is a deeply emotional tribute to a lost friend, exploring themes of depression, loss, and pain.',
            cover:'../assets/Home/xxxtentacion.jpeg',
            file:'..assets/Songs/XXXTENTACION - Jocelyn Flores (Audio).mp3',
            lyric:
            `[Intro: Shiloh Dynasty]
            I know you so well, so well
            I mean, I can do anything that he can
            I've been pretty—

            [Bridge: XXXTENTACION & Shiloh Dynasty]
            I know you're somewhere, somewhere
            I've been trapped in my mind, girl, just holding on
            I don't wanna pretend we're something, we're nothing
            I've been stuck thinking 'bout her, I can't hold on
            (I've been pretty—)

            [Verse: XXXTENTACION]
            I'm in pain, wanna put ten shots in my brain
            I've been trippin' 'bout some things, can't change
            Suicidal, same time I'm tame
            Picture this, in bed, get a phone call
            Girl that you fucked with killed herself
            That was this summer when nobody helped
            And ever since then, man, I hate myself
            Wanna fuckin' end it, pessimistic
            All wanna see me with no pot to piss in
            But niggas been excited 'bout the grave I'm diggin'
            Havin' conversations 'bout my haste decisions
            Fuckin' sickenin'; at the same time
            Memories surface through the grapevine
            'Bout my uncle playin' with a slip knot
            Post-traumatic stress got me fucked up
            Been fucked up since the couple months they had a nigga locked up
            [Chorus: XXXTENTACION]
            I'll be feelin' pain, I'll be feelin' pain just to hold on
            And I don't feel the same, I'm so numb
            I'll be feelin' pain, I'll be feelin' pain just to hold on
            And I don't feel the same, I'm so numb

            [Outro: Shiloh Dynasty]
            I know you so well, I know you well
            I mean, I can do anything
            I can do he can
            I've been pretty—
            I know you so well`
        },

        {
            id: '29',
            title:'Train Wreck',
            artist:'James Arthur',
            description:'"Train Wreck" by James Arthur is a heartfelt plea for help and love in the midst of emotional chaos and personal despair.',
            cover:'../assets/Home/jamesarthur.jpeg',
            file:'../assets/Songs/James Arthur - Train Wreck (Audio).mp3',
            lyric:
            `[Verse 1]
            Laying in the silence
            Waiting for the sirens
            Signs, any signs I'm alive still
            I don't wanna lose it
            But I'm not getting through this
            Hey, should I pray?
            Should I pray, yeah
            To myself? To a God?
            To a saviour who can

            [Chorus]
            Unbreak the broken
            Unsay these spoken words
            Find hope in the hopeless
            Pull me out the train wreck
            Unburn the ashes
            Unchain the reactions now
            I'm not ready to die, not yet
            Pull me out the train wreck
            Pull me out, pull me out, pull me out
            Pull me out, pull me out

            [Verse 2]
            Underneath our bad blood
            We've still got a sanctum
            Home, still a home, still a home here
            It's not too late to build it back
            'Cause a one in a million chance
            Is still a chance, still a chance
            And I would take those odds
            [Chorus]
            Unbreak the broken
            Unsay these spoken words
            Find hope in the hopeless
            Pull me out the train wreck
            Unburn the ashes
            Unchain the reactions now
            I'm not ready to die, not yet
            Pull me out the train wreck
            Pull me out, pull me out, pull me out, oh oh
            Pull me out, pull me out, pull me out

            [Bridge]
            You can say what you like
            Don't say I wouldn't die for it (Ah)
            I'm down on my knees
            And I need you to be my God
            Be my help, be a saviour who can

            [Chorus]
            Unbreak the broken
            Unsay these reckless words (Find hope in the hopeless)
            Pull me out the train wreck
            Unburn the ashes
            Unchain the reactions now
            I'm not ready to die, not yet
            Pull me out the train wreck
            Pull me out, pull me out, pull me out
            Pull me out, pull me out, pull me out`
        },

        {
            id: '30',
            title:'Mercy',
            artist:'Shawn Mendes',
            description:'../assets/Home/shawn.jpeg',
            cover:'../assets/Home/shawn.jpeg',
            file:'../assets/Songs/Shawn Mendes - Mercy (Official Music Video).mp3',
            lyric:
            `[Intro]
            Mm-mm-mm, mm-mm, mm-mm-mm, mm, mm-mm-mm, mm, mmm
            Mm-mm-mm, mm-mm, mm-mm-mm, mm, mm-mm-mm, mm, mmm

            [Verse 1]
            You've got a hold on me
            Don't even know your power
            I stand a hundred feet
            But I fall when I'm around ya
            Show me an open door
            And you go and slam it on me
            I can't take anymore
            I'm saying, baby

            [Chorus]
            Please have mercy on me
            Take it easy on my heart
            Even though you don't mean to hurt me
            You keep tearing me apart
            Would you please have mercy?
            Mercy on my heart
            Would you please have mercy?
            Mercy on my heart

            [Verse 2]
            I'd drive through the night
            Just to be near you, baby
            Heart open, testify
            Tell me that I'm not crazy
            I'm not asking for a lot
            Just that you're honest with me
            And my pride is all I got
            I'm saying, baby
            [Chorus]
            Please have mercy on me
            Take it easy on my heart
            Even though you don't mean to hurt me
            You keep tearing me apart
            Would you please have mercy on me?
            I'm a puppet on your strings
            And even though you got good intentions
            I need you to set me free
            Would you please have mercy?
            Mercy on my heart
            Would you please have mercy?
            Mercy on my heart

            [Bridge]
            Consuming all the air inside my lungs
            Ripping all the skin from off my bones
            I'm prepared to sacrifice my life
            I would gladly do it twice
            Consuming all the air inside my lungs
            Ripping all the skin from off my bones
            I'm prepared to sacrifice my life
            I would gladly do it twice

            [Chorus]
            Oh, please have mercy on me
            Take it easy on my heart
            Even though you don't mean to hurt me
            You keep tearing me apart
            Would you please have mercy on me?
            I'm a puppet on your string
            And even though you got good intentions
            I need you to set me free
            [Outro]
            I'm begging you for mercy, mercy
            I'm begging you, begging you, please, baby
            I'm begging you for mercy, mercy
            Ooh, I'm begging you, I'm begging you, yeah
            Mm-mm-mm, mm-mm, mm-mm-mm, mm, mm-mm-mm, mm, mmm`
        },


        {
            id: '31',
            title:'Starboy',
            artist:'The Weekend',
            description:'"Starboy" by The Weeknd is a dark, stylish track about fame, materialism, and the transformation that comes with success.',
            cover:'../assets/Home/theweekend.jpeg',
            file:'../assets/Songs/Starboy.mp3',
            lyric:
            `[Intro]
            Ayy

            [Verse 1]
            I'm tryna put you in the worst mood, ah
            P1 cleaner than your church shoes, ah
            Milli point two just to hurt you, ah
            All red Lamb' just to tease you, ah
            None of these toys on lease too, ah
            Made your whole year in a week too, yah
            Main bitch outta your league too, ah
            Side bitch outta your league too, ah

            [Pre-Chorus]
            House so empty, need a centerpiece
            Twenty racks a table, cut from ebony
            Cut that ivory into skinny pieces
            Then she clean it with her face, man, I love my baby, ah
            You talkin' money, need a hearin' aid
            You talkin' 'bout me, I don't see the shade
            Switch up my style, I take any lane
            I switch up my cup, I kill any pain

            [Chorus]
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            Look what you've done
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            I'm a motherfuckin' starboy
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            Look what you've done
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            I'm a motherfuckin' starboy
            [Verse 2]
            Every day, a nigga try to test me, ah
            Every day, a nigga try to end me, ah
            Pull off in that Roadster SV, ah
            Pockets overweight, gettin' hefty, ah
            Comin' for the king, that's a far cry, I
            I come alive in the fall time, I
            The competition, I don't really listen
            I'm in the blue Mulsanne, bumpin' New Edition

            [Pre-Chorus]
            House so empty, need a centerpiece
            Twenty racks a table, cut from ebony
            Cut that ivory into skinny pieces
            Then she clean it with her face, man, I love my baby, ah
            You talkin' money, need a hearin' aid
            You talkin' 'bout me, I don't see the shade
            Switch up my style, I take any lane
            I switch up my cup, I kill any pain

            [Chorus]
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            Look what you've done
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            I'm a motherfuckin' starboy
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            Look what you've done
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            I'm a motherfuckin' starboy
            [Verse 3]
            Let a nigga brag Pitt
            Legend of the fall, took the year like a bandit
            Bought Mama a crib and a brand new wagon
            Now she hit the grocery shop lookin' lavish
            Star Trek roof in that Wraith of Khan
            Girls get loose when they hear this song
            A hundred on the dash get me close to God
            We don't pray for love, we just pray for cars

            [Pre-Chorus]
            House so empty, need a centerpiece
            Twenty racks a table, cut from ebony
            Cut that ivory into skinny pieces
            Then she clean it with her face, man, I love my baby, ah
            You talkin' money, need a hearin' aid
            You talkin' 'bout me, I don't see the shade
            Switch up my style, I take any lane
            I switch up my cup, I kill any pain

            [Chorus]
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            Look what you've done
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            I'm a motherfuckin' starboy
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            Look what you've done
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            I'm a motherfuckin' starboy
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            Look what you've done
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            I'm a motherfuckin' starboy
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            Look what you've done
            (Ha-ha-ha-ha-ha, ha-ha-ha-ha-ha)
            I'm a motherfuckin' starboy`
        },

        {
            id: '32',
            title:'Paris',
            artist:'The Chainsmoker',
            description:'"Paris" by The Chainsmokers is a nostalgic story of youthful rebellion and romantic escape, set in a dreamlike mood.',
            cover:'../assets/Home/thechainsmoker.jpeg',
            file:'../assets/Songs/The Chainsmokers - Paris.mp3',
            lyric:
            `[Verse 1: Andrew Taggart]
            We were stayin' in Paris
            To get away from your parents
            And I thought, "Wow
            If I could take this in a shot right now
            I don't think that we could work this out"
            Out on the terrace
            I don't know if it's fair, but I thought, "How
            Could I let you fall by yourself
            While I'm wasted with someone else?"

            [Chorus: Andrew Taggart]
            If we go down, then we go down together
            They'll say you could do anything
            They'll say that I was clever
            If we go down, then we go down together
            We'll get away with everything
            Let's show them we are better

            [Refrain: Andrew Taggart]
            Let's show them we are better
            Let's show them we are better

            [Verse 2: Andrew Taggart]
            We were stayin' in Paris
            To get away from your parents
            You look so proud
            Standing there with a frown and a cigarette
            Postin' pictures of yourself on the Internet
            Out on the terrace
            We breathe in the air of this small town
            On our own, cuttin' class for the thrill of it
            Gettin' drunk on the past we were livin' in
            [Chorus: Andrew Taggart & Emily Warren]
            If we go down, then we go down together
            They'll say you could do anything
            They'll say that I was clever
            If we go down, then we go down together
            We'll get away with everything
            Let's show them we are better

            [Bridge: Emily Warren & Andrew Taggart]
            Let's show them we are, show them we are
            Let's show them we are, show them we are
            Let's show them we are better
            We were stayin' in Paris
            Let's show them we are better
            Let's show them we are, show them we are
            Let's show them we are, show them we are
            Let's show them we are better

            [Chorus: Andrew Taggart & Emily Warren]
            If we go down, then we go down together
            They'll say you could do anything
            They'll say that I was clever
            If we go down, then we go down together
            We'll get away with everything
            Let's show them we are better
            [Post-Chorus: Andrew Taggart & Emily Warren]
            We were stayin' in Paris (If we go down)
            We were stayin' in Paris (If we go down)
            We were stayin' in Paris (If we go down)
            We were stayin' in Paris (If we go down)
            Let's show them we are better
            We were stayin' in Paris

            [Drop: Andrew Taggart & Emily Warren]
            Let's show them we are better
            Let's show them we are better
            If we go down
            Let's show them we are better
            If we go down
            Let's show them we are better
            If we go down
            Let's show them we are better
            Let's show them we are better`
        },

        {
            id: '33',
            title:'Dior',
            artist:'Pop Smoke',
            description:'"Dior" by Pop Smoke is a bold, gritty anthem that showcases confidence, luxury, and street pride in the drill music style.',
            cover:'../assets/Home/popsmoke.jpeg',
            file:'../assets/Songs/Pop Smoke - Dior.mp3',
            lyric:
            `[Intro]
            (Traphouse Mob)
            Huh,  roll another one
            Said  I'm never lackin', always pistol packing (This is a Melo beat)
            With them automatics, we gon' send him to heaven (Huh)
            Wait, wait, wait, wait, ayy, ayy, woo (Aw, shit), huh
            Oh,  you feelin' sturdy, huh? (You feelin' sturdy, baby)
            Shake  some', huh
            Shake it, huh, shake it, huh, shake it, huh

            [Chorus]
            She  like the way that I dance
            She like the way that I move
            She like the way that I rock
            She like the way that I woo
            And  she let it clap for a nigga
            (She let it clap for a nigga)
            And she throw it back for a nigga
            (Yeah, she throw it back for a nigga)
            Mike Amiri, Mike Amiri
            Billie Jean, Billie Jean (Uh)
            Christian Dior, Dior
            I'm up in all the stores
            When it rains, it pours
            She like the way I rrr
            Mike Amiri, Mike Amiri
            Billie Jean, Billie Jean (Uh)
            Christian Dior, Dior
            I'm up in all the stores
            When it rains, it pours
            She like the way I rrr
            [Verse]
            When I walk in the spot, thirty on me
            Buy out the club, niggas know that I'm paid
            Bitch, I'm a thot, get me lit
            I can't fuck with these niggas 'cause niggas is gay
            All on my page suckin' dick
            All in my comments and screamin' my name
            While I'm in the club, throwin' them hundreds and fifties and ones and ones
            Pop Smoke, they know I'm wildin'
            If I'm on the island, I'm snatchin' the cell
            Brody got locked, denied his bail (Woo)
            Until he free, I'm raisin' hell
            Tell my shooters call me FaceTime
            For all the times we had to face time
            Free D-Nice, he doin' state time
            If you need the glizzy, you could take mine
            Please don't come out your mouth, you know I'm like that
            I'll make a movie like TNT (Baow)
            Glock-30 on me, ask who really want it
            I bet I air it like BNB
            Nappy Blue wildin' in my section
            And I keep that .38 for the weapon
            Remember when I came home from corrections (Uh-huh)
            All the bad bitches in my direction (Uh)

            [Chorus]
            She like the way that I dance
            She like the way that I move
            She like the way that I rock
            She like the way that I woo
            And she let it clap for a nigga
            (She let it clap for a nigga)
            And she throw it back for a nigga
            (Yeah, she throw it back for a nigga)
            Mike Amiri, Mike Amiri
            Billie Jean, Billie Jean (Uh)
            Christian Dior, Dior
            I'm up in all the stores
            When it rains, it pours
            She like the way I rrr
            Mike Amiri, Mike Amiri
            Billie Jean, Billie Jean (Uh)
            Christian Dior, Dior
            I'm up in all the stores
            When it rains, it pours
            She like the way I rrr
            [Outro]
            (Traphouse Mob)`
        },

        {
            id: '34',
            title:'Stitches',
            artist:'Shawn Mendes',
            description:'"Stitches" by Shawn Mendes is a powerful song about the pain of heartbreak and struggling to heal after emotional wounds.',
            cover:'../assets/Home/stitches.jpeg',
            file:'../assets/Songs/Pop Smoke - Dior.mp3',
            lyric:
            `[Verse 1]
            I thought that I'd been hurt before
            But no one's ever left me quite this sore
            Your words cut deeper than a knife
            Now I need someone to breathe me back to life

            [Pre-Chorus]
            Got a feeling that I'm goin' under
            But I know that I'll make it out alive
            If I quit calling you my lover
            And move on

            [Chorus]
            You watch me bleed until I can't breathe, shaking
            Falling onto my knees
            And now that I'm without your kisses
            I'll be needin' stitches
            Trippin' over myself, aching
            Begging you to come help
            And now that I'm without your kisses
            I'll be needin' stitches

            [Verse 2]
            Just like a moth drawn to a flame
            Oh, you lured me in, I couldn't sense the pain
            Your bitter heart, cold to the touch
            Now I'm gonna reap what I sow
            I'm left seein' red on my own
            [Pre-Chorus]
            Got a feeling that I'm goin' under
            But I know that I'll make it out alive
            If I quit calling you my lover
            And move on

            [Chorus]
            You watch me bleed until I can't breathe, shaking
            Falling onto my knees
            And now that I'm without your kisses
            I'll be needin' stitches
            Trippin' over myself, aching
            Begging you to come help
            And now that I'm without your kisses
            I'll be needin' stitches

            [Bridge]
            Needle and the thread, gotta get you outta my head
            Needle and the thread, gonna wind up dead
            Needle and the thread, gotta get you outta my head
            Needle and the thread, gonna wind up dead (Gonna wind up dead)
            Needle and the thread, gotta get you outta my head (Gotta get you outta my head)
            Needle and the thread, gonna wind up dead (Wind up dead)
            Needle and the thread, gotta get you outta my head
            Get you outta my head
            [Chorus]
            You watch me bleed until I can't breathe, shaking
            Falling onto my knees (Falling onto my knees)
            And now that I'm without your kisses (Without you)
            I'll be needin' stitches (I'll be needin' stitches)
            Trippin' over myself, aching
            Begging you to come help (Begging, baby, please)
            And now that I'm without your kisses (Without your kisses)
            I'll be needin' stitches (And I'll be)

            [Outro]
            Now that I'm without your kisses
            Yeah, I'll be needin' stitches (And I'll be)
            And now that I'm without your kisses
            Yeah, I'll be needin' stitches`
        },

        {
            id: '35',
            title:'VITAMIN U',
            artist:'Paul Partohap',
            description:'"VITAMIN U" by Paul Partohap is a charming love song expressing how someone special brings joy, energy, and healing like a daily dose of happiness.',
            cover:'../assets/Home/paulpartohap.jpeg',
            file:'../assets/Songs/Paul Partohap - VITAMIN U (Lyric Video).mp3',
            lyric:
            `Hand in hand
            Forever side by side
            A love so special
            Can't be denied

            Two souls entwined
            Our paths may part
            For a little while
            But I'll find you with a smile

            I love who I am when I'm with you
            Met other me inside of you
            All I want is you

            there is no caption needed
            (You, ) reason my body got heated
            (All I gotta do) is to make you mine, oh mine

            become my new obsession
            (Girl, ) you are a limited edition
            (All I want is) vitamin u, oh you

            Because all I want is vitamin u
            All I want is vitamin u
            All I want is vitamin u, oh you`
        },    
        
         {
            id: '36',
            title:'Nonsense',
            artist:'Sabrina Carpenter',
            description:'"Nonsense" by Sabrina Carpenter is a flirty, playful song with clever, cheeky lyrics about being tongue-tied around a crush.',
            cover:'../assets/Home/sabrinacarpenter.jpeg',
            file:'../assets/Songs/Sabrina Carpenter - Nonsense (Official Audio).mp3',
            lyric:
            `[Intro]
            Oh-oh, oh-oh, oh-oh (Oh-oh, la-la)
            Da-ah, ah-ah, ah-ah-ah
            Uh-huh, uh-huh, uh-huh, uh-huh
            Yeah

            [Verse 1]
            Think I only want one number in my phone
            I might change your contact to "Don't Leave Me Alone"
            You said you like my eyes and you like to make 'em roll
            Treat me like a queen, now you got me feelin' thrown, oh

            [Pre-Chorus]
            But I can't help myself when you get close to me
            Baby, my tongue goes numb, sounds like "bleh-blah-blee"
            I don't want no one else (No, no), baby, I'm in too deep
            Here's a lil' song I wrote (A song I wrote), it's about you and me (Me)

            [Chorus]
            I'll be honest
            Lookin' at you got me thinkin' nonsense
            Cartwheels in my stomach when you walk in
            And when you got your arms around me
            Oh, it feels so good
            I had to jump the octave
            I think I got an ex, but I forgot him
            And I can't find my chill, I must've lost it
            I don't even know, I'm talkin' nonsense
            I'm talkin', I'm talkin' (Ah-ah-ah-ah)
            [Verse 2]
            I'm talkin' all around the clock
            I'm talkin' hope nobody knocks
            I'm talkin' opposite of soft
            I'm talkin' wild, wild thoughts
            You gotta keep up with me
            I got some young energy
            I caught the L-O-V-E
            How do you do this to me?

            [Pre-Chorus]
            But I can't help myself when you get close to me
            Baby, my tongue goes numb, sounds like "bleh-blah-bleh-blee"
            And I don't want no one else (No, no), baby, I'm in too deep (Too deep)
            Here's a lil' song I wrote (A song I wrote), it's about you and me

            [Chorus]
            I'll be honest (Honest)
            Lookin' at you got me thinkin' nonsense (Nonsense)
            Cartwheels in my stomach when you walk in (When you walk in)
            When you got your arms around me
            Oh, it feels so good
            I had to hit the octave
            I think I got an ex, but I forgot him
            And I can't find my chill, I must've lost it
            I don't even know, I'm talkin' nonsense (Oh-oh)
            I'm talkin', I'm talkin', I'm talkin'
            [Bridge]
            I'm talkin', I'm talkin' (Na-na-na), I'm talkin'
            (Blah-blah, blah-blah)
            Ah-ah, ah-ah, ah (Ah-ah)
            I don't even know anymore
            (Oh)

            [Outro]
            This song catchier than chickenpox is
            I bet your house is where my other sock is
            Woke up this morning, thought I'd write a pop hit, ha-ha
            How quickly can you take your clothes off? Pop quiz
            That one's not gonna make it
            Most of these aren't gonna make—`
        },    

         {
            id: '37',
            title:'505',
            artist:'Arctic Monkeys',
            description:'"505" by Arctic Monkeys is a moody, nostalgic rock ballad about longing, regret, and the powerful pull of a past relationship.',
            cover:'../assets/Home/arctic.jpeg',
            file:'../assets/Songs/505 - Arctic Monkeys.mp3',
            lyric:
            `[Chorus]
            I'm going back to 505
            If it's a seven hour flight or a forty-five minute drive
            In my imagination, you're waitin' lyin' on your side
            With your hands between your thighs

            [Verse]
            Stop and wait a sec
            And when you look at me like that, my darlin'
            What did you expect?
            I'd probably still adore you
            With your hands around my neck
            Or I did last time I checked
            Not shy of a spark
            The knife twists at the thought
            That I should fall short of the mark
            Frightened by the bite, though
            It's no harsher than the bark
            The middle of adventure
            Such a perfect place to start

            [Chorus]
            I'm going back to 505
            If it's a seven hour flight or a forty-five minute drive
            In my imagination, you're waitin' lyin' on your side
            With your hands between your thighs
            [Bridge]
            But I crumble completely when you cry
            It seems like once again you've had to greet me with goodbye
            I'm always just about to go and spoil the surprise
            Take my hands off of your eyes too soon

            [Chorus]
            I'm going back to 505
            If it's a seven hour flight or a forty-five minute drive
            In my imagination, you're waitin' lyin' on your side
            With your hands between your thighs and a smile`
        },    

         {
            id: '38',
            title:'boyfriend',
            artist:'Ariana Grande',
            description:'"Boyfriend" by Ariana Grande is a catchy pop song about the confusion and tension in a relationship that’s more than friends but not quite official.',
            cover:'../assets/Home/arianagrande.jpeg',
            file:'../assets/Songs/Ariana Grande & Social House - boyfriend (AUDIO).mp3',
            lyric:
            `[Verse 1: Ariana Grande]
            I'm a motherfuckin' train wreck
            I don't wanna be too much
            But I don't wanna miss your touch
            And you don't seem to give a fuck
            I don't wanna keep you waiting
            But I do just what I have to do
            And I might not be the one for you
            But you ain't allowed to have no boo

            [Pre-Chorus: Ariana Grande]
            'Cause I know we be so complicated
            But we be so smitten, it's crazy
            I can't have what I want, but neither can you

            [Chorus: Ariana Grande]
            You ain't my boyfriend (Boyfriend)
            And I ain't your girlfriend (Girlfriend)
            But you don't want me to see nobody else
            And I don't want you to see nobody
            But you ain't my boyfriend (Boyfriend)
            And I ain't your girlfriend (Girlfriend)
            But you don't want me to touch nobody else (Nobody)
            Baby, we ain't gotta tell nobody

            [Verse 2: Mikey]
            Even though you ain't mine, I promise the way we fight
            Make me honestly feel like we just in love (Love)
            'Cause, baby, when push comes to shove (Shove)
            Damn, baby, I'm a train wreck, too (Too)
            I lose my mind when it comes to you
            I take time with the ones I choose
            And I don't want a smile if it ain't from you, yeah
            [Pre-Chorus: Mikey]
            I know we be so complicated
            Lovin' you sometimes drive me crazy
            'Cause I can't have what I want and neither can you (No, no)

            [Chorus: Ariana Grande]
            You ain't my boyfriend (Boyfriend)
            And I ain't your girlfriend (Girlfriend)
            But you don't want me to see nobody else
            And I don't want you to see nobody
            But you ain't my boyfriend (Boyfriend)
            And I ain't your girlfriend (Girlfriend)
            But you don't want me to touch nobody else (Nobody)
            Baby, we ain't gotta tell nobody

            [Verse 3: Scootie & Ariana Grande]
            I wanna kiss you (Yeah), don't wanna miss you (Yeah)
            But I can't be with you 'cause I got issues (No)
            Yeah, on the surface, seem like it's easy
            Careful with words, but it's still hard to read me
            Stress high when the trust low (Mmm)
            Bad vibes, where'd the fun go? (Oh)
            Try to open up and love more (Love more)
            Try to open up and love more

            [Bridge: Scootie, Ariana Grande & Both]
            If you were my boyfriend
            And you were my girlfriend
            I prolly wouldn't see nobody else
            But I can't guarantee that by myself
            [Chorus: Ariana Grande]
            You ain't my boyfriend (Boyfriend, you ain't my boyfriend)
            And I ain't your girlfriend (Girlfriend, I ain't your girlfriend)
            But you don't want me to see nobody else (Nobody)
            And I don't want you to see nobody
            But you ain't my boyfriend (Boyfriend, you know you ain't my boyfriend)
            And I ain't your girlfriend (Girlfriend, yeah, mmm)
            But you don't want me to touch nobody else (Nobody)
            Baby, we ain't gotta tell nobody (Oh yeah)
            You ain't my boyfriend (Boyfriend)
            And I ain't your girlfriend (Girlfriend)
            But you don't want me to see nobody else
            And I don't want you to see nobody
            But you ain't my boyfriend (Boyfriend)
            And I ain't your girlfriend (Girlfriend, yeah)
            But you don't want me to touch nobody else (Nobody)
            Baby, we ain't gotta tell nobody`
        },    

         {
            id: '39',
            title:'Limbo',
            artist:'Keshi',
            description:'"Limbo" by Keshi is a melancholic, smooth track exploring the feeling of emotional numbness and being stuck between love and loss.',
            cover:'../assets/Home/keshi.jpeg',
            file:'../assets/Songs/LIMBO.mp3',
            lyric:
            `[Intro]
            Ooh
            Ooh-ooh-ooh-ooh
            Ooh-ooh-ooh-ooh, ooh
            Ooh-ooh, ooh
            Ooh-ooh-ooh-ooh, ooh
            Ooh-ooh, ooh

            [Verse 1]
            I just been goin' through motions, back and forth like a ocean
            I am a fraud, I am the shit, hoping that nobody notice
            Bang chest in the morning, head down in the night
            Drink less if I wanted, strike up with the light
            And square up, I’m the mightest
            Myself in the fight, hurt twice but I tried it
            No advice for this shit, might die for this shit
            Do I feel alive, feel alive, feel alive?

            [Chorus]
            Feel more like limbo, hands out my window
            Chasin' that sunset, that's more my tempo
            Yeah, that’s more my tempo
            Ooh, but this is all that I am
            I only show you the best of me
            The best of me
            [Verse 2]
            Looked in my demons and saw myself
            Put all my meanin' in someone else
            Outta sight, outta mind, don't know where to find it
            Don't know where to hide, but I still
            Eat good, drink good, feel good, s'all good
            Can't hear my head when I'm sat beside ya
            Fucked lungs and a liver, good looks in the mirror
            Do I feel alive, feel alive, feel alive?

            [Chorus]
            Feel more like limbo, hands out my window
            Chasin' that sunset, that’s more my tempo
            That’s more my tempo
            (keshi) Ooh, but this is all that I am
            I only show you the best of me
            The best of me
            Ooh, tryin' but I’m just a man
            Hopin' it won't get the best of me
            The best of me`
        },    

         {
            id: '40',
            title:'Dangerous Woman',
            artist:'Ariana Grande',
            description:'"Dangerous Woman" by Ariana Grande is a sensual, confident anthem about embracing one’s power and desire in a bold, unapologetic way.',
            cover:'../assets/Home/arianaa.jpeg',
            file:'../assets/Songs/Ariana Grande - Dangerous Woman (Official Audio).mp3',
            lyric:
            `[Intro]
            Oh, yeah

            [Verse 1]
            Don't need permission
            Made my decision to test my limits
            'Cause it's my business, God as my witness
            Start what I finished
            Don't need no hold up
            Taking control of this kind of moment
            I'm locked and loaded
            Completely focused, my mind is open

            [Pre-Chorus]
            All that you got
            Skin to skin, oh my God
            Don't you stop, boy

            [Chorus]
            Somethin' 'bout you makes me feel like a dangerous woman
            Somethin' 'bout, somethin' 'bout, somethin' 'bout you
            Makes me wanna do things that I shouldn't
            Somethin' 'bout, somethin' 'bout, somethin' 'bout

            [Verse 2]
            Nothing to prove and I'm bulletproof and
            Know what I'm doing
            The way we're movin'
            Like introducing us to a new thing
            I wanna savor, save it for later
            The taste, the flavor, 'cause I'm a taker, 'cause I'm a giver
            It's only nature, I live for danger
            [Pre-Chorus]
            All that you got
            Skin to skin, oh my God
            Don't ya stop, boy (Oh, yeah)

            [Chorus]
            Somethin' 'bout you makes me feel like a dangerous woman
            Somethin' 'bout, somethin' 'bout, somethin' 'bout you
            Makes me wanna do things that I shouldn't
            Somethin' 'bout, somethin' 'bout, somethin' 'bout you

            [Post-Chorus]
            All girls wanna be like that
            Bad girls underneath, like that
            You know how I'm feeling inside
            (Somethin' 'bout, somethin' 'bout—)
            All girls wanna be like that
            Bad girls underneath, like that
            You know how I'm feeling inside
            (Somethin' 'bout, somethin' 'bout—)

            [Bridge]
            Mm-mm
            Ooh-ooh

            [Chorus]
            Somethin' 'bout you makes me feel like a dangerous woman
            Somethin' 'bout, somethin' 'bout, somethin' 'bout you
            Makes me wanna do things that I shouldn't (Yeah)
            Somethin' 'bout, somethin' 'bout, somethin' 'bout you (Yeah)
            [Post-Chorus]
            All girls wanna be like that (Mm-mm)
            Bad girls underneath like that
            You know how I'm feeling inside (You know how I'm feeling inside, baby)
            (Somethin' 'bout, somethin' 'bout you)
            All girls wanna be like that
            Bad girls underneath like that
            You know how I'm feeling inside
            (Somethin' 'bout, somethin' 'bout—)

            [Outro]
            Yeah, there's somethin' 'bout you, boy (Ha)
            Yeah, there's somethin' 'bout you, boy (Ha-ah-ayy)
            Yeah, there's somethin' 'bout you, boy
            (Somethin' 'bout, somethin' 'bout, somethin' 'bout you)
            Yeah, there's somethin' 'bout you, boy
            Yeah, there's somethin' 'bout you, boy
            Yeah, there's somethin' 'bout you, boy, oh, yeah
            (Somethin' 'bout, somethin' 'bout, somethin' 'bout) You`
        },    

         {
            id: '41',
            title:'Luther',
            artist:'Kendrick Lamar, SZA',
            description:'"LUTHER" by Kendrick Lamar is a confident, soulful track blending smooth melodies with bold lyrics, paying tribute to legacy and self-assurance.',
            cover:'../assets/Home/luther.jpeg',
            file:'../assets/Songs/Kendrick Lamar - luther.mp3',
            lyric:
            `[Intro]
            If this world were mine

            [Verse 1: Kendrick Lamar]
            Hey, Roman numeral seven, bae, drop it like it's hot
            If this world was mine, I'd take your dreams and make 'em multiply
            If this world was mine, I'd take your enemies in front of God
            Introduce 'em to that light, hit them strictly with that fire
            Fah-fah, fah-fah-fah, fah-fah, fah
            Hey, Roman numeral seven, bae, drop it like it's hot
            If this world was mine, I'd take your dreams and make 'em multiply
            If this world was mine, I'd take your enemies in front of God
            Introduce 'em to that light, hit them strictly with that fire
            It's a vibe, do your dance, let 'em watch
            She a fan, he a flop, they just wanna kumbaya, nah

            [Chorus: SZA, SZA & Kendrick Lamar]
            In this world, concrete flowers grow
            Heartache, she only doin' what she know
            Weekends, get it poppin' on the low
            Better days comin' for sure
            If this world were—
            If it was up to me
            I wouldn't give these nobodies no sympathy
            I'd take away the pain, I'd give you everything
            I just wanna see you win, wanna see
            If this world were mine
            [Verse 2: Kendrick Lamar & SZA]
            It go in (When you), out (Ride it), do it real slow (Slide)
            Baby, you a star, strike, pose
            When I'm (When you), with you (With me), everything goes (Slow)
            Come and (Put that), put that (On my), on my (Titi), soul (Soul)
            'Rari (Red), crown (Stack), wrist (Stay), froze (Really)
            Drip (Tell me), pound (If you), on the way home (Love me)

            [Chorus: Kendrick Lamar & SZA]
            In this world, concrete flowers grow
            Heartache, she only doin' what she know
            Weekends, get it poppin' on the low
            Better days comin' for sure
            If this world were—
            If it was up to me
            I wouldn't give these nobodies no sympathy
            I'd take away the pain, I'd give you everything
            I just wanna see you win, wanna see
            If this world were mine

            [Verse 3: Kendrick Lamar & SZA]
            I can't lie
            I trust you, I love you, I won't waste your time
            I turn it off just so I can turn you on
            I'ma make you say it loud
            I'm not even trippin', I won't stress you out
            I might even settle down for you, I'ma show you I'm a pro
            I'ma take my time and turn it off
            Just so I can turn you on, baby
            Weekends, get it poppin' on the low
            Better days comin' for sure
            [Outro: SZA]
            I know you're comin' for
            Better days
            If this world were mine`
        },    

         {
            id: '42',
            title:'Die With a Smile',
            artist:'Lady Gaga, Bruno Mars',
            description:'',
            cover:'../assets/Home/diewithsmile.jpeg',
            file:'../assets/Songs/Lady Gaga Bruno Mars - Die With A Smile (Official Audio).mp3',
            lyric:
            `[Intro: Bruno Mars]
            (Ooh, ooh)

            [Verse 1: Bruno Mars]
            I, I just woke up from a dream
            Where you and I had to say goodbye
            And I don't know what it all means
            But since I survived, I realized

            [Pre-Chorus: Bruno Mars]
            Wherever you go, that's where I'll follow
            Nobody's promised tomorrow
            So I'ma love you every night like it's the last night
            Like it's the last night

            [Chorus: Bruno Mars]
            If the world was ending
            I'd wanna be next to you
            If the party was over
            And our time on Earth was through
            I'd wanna hold you just for a while
            And die with a smile
            If the world was ending
            I'd wanna be next to you

            [Post-Chorus: Bruno Mars]
            (Ooh, ooh)
            [Verse 2: Lady Gaga, Lady Gaga & Bruno Mars]
            Ooh, lost, lost in the words that we scream
            I don't even wanna do this anymore
            'Cause you already know what you mean to me
            And our love's the only war worth fighting for

            [Pre-Chorus: Lady Gaga & Bruno Mars]
            Wherever you go, that's where I'll follow
            Nobody's promised tomorrow
            So I'ma love you every night like it's the last night
            Like it's the last night

            [Chorus: Lady Gaga & Bruno Mars, Lady Gaga]
            If the world was ending
            I'd wanna be next to you
            If the party was over
            And our time on Earth was through
            I'd wanna hold you just for a while
            And die with a smile
            If the world was ending
            I'd wanna be next to you

            [Bridge: Bruno Mars, Lady Gaga, Both]
            Right next to you
            Next to you
            Right next to you
            Oh-oh
            [Chorus: Lady Gaga, Lady Gaga & Bruno Mars, Bruno Mars]
            If the world was ending
            I'd wanna be next to you
            If the party was over
            And our time on Earth was through
            I'd wanna hold you just for a while
            And die with a smile
            If the world was ending
            I'd wanna be next to you
            If the world was ending
            I'd wanna be next to you

            [Outro: Bruno Mars, Lady Gaga & Bruno Mars]
            (Ooh, ooh)
            I'd wanna be next to you`
        },    

         {
            id: '43',
            title:'Not Like Us',
            artist:'Kendrick Lamar',
            description:'"Not Like Us" by Kendrick Lamar is a bold, aggressive track aimed at critics and rivals, asserting independence and dominance.',
            cover:'../assets/Home/notlikeus.jpeg',
            file:'../assets/Songs/Not Like Us.mp3',
            lyric:
            `[Intro]
            Psst, I see dead people
            (Mustard on the beat, ho)

            [Verse 1]
            Ayy, Mustard on the beat, ho
            Deebo any rap nigga, he a free throw
            Man down, call an amberlamps, tell him, "Breathe, bro"
            Nail a nigga to the cross, he walk around like Teezo
            What's up with these jabroni-ass niggas tryna see Compton?
            The industry can hate me, fuck 'em all and they mama
            How many opps you really got? I mean, it's too many options
            I'm finna pass on this body, I'm John Stockton
            Beat your ass and hide the Bible if God watchin'
            Sometimes you gotta pop out and show niggas
            Certified boogeyman, I'm the one that up the score with 'em
            Walk him down, whole time, I know he got some ho in him
            Pole on him, extort shit, bully Death Row on him
            Say, Drake, I hear you like 'em young
            You better not ever go to cell block one
            To any bitch that talk to him and they in love
            Just make sure you hide your lil' sister from him
            They tell me Chubbs the only one that get your hand-me-downs
            And Party at the party playin' with his nose now
            And Baka got a weird case, why is he around?
            Certified Lover Boy? Certified pedophiles
            Wop, wop, wop, wop, wop, Dot, fuck 'em up
            Wop, wop, wop, wop, wop, I'ma do my stuff
            Why you trollin' like a bitch? Ain't you tired?
            Tryna strike a chord and it's probably A minor
            [Chorus]
            They not like us, they not like us, they not like us
            They not like us, they not like us, they not like us

            [Verse 2]
            You think the Bay gon' let you disrespect Pac, nigga?
            I think that Oakland show gon' be your last stop, nigga
            Did Cole foul, I don't know why you still pretendin'
            What is the owl? Bird niggas and burnt bitches, go
            The audience not dumb
            Shape the stories how you want, hey, Drake, they're not slow
            Rabbit hole is still deep, I can go further, I promise
            Ain't that somethin'? B-Rad stands for bitch and you Malibu most wanted
            Ain't no law, boy, you ball boy, fetch Gatorade or somethin'
            Since 2009, I had this bitch jumpin'
            You niggas'll get a wedgie, be flipped over your boxers
            What OVO for? The "Other Vaginal Option"? Pussy
            Nigga better straighten they posture, got famous all up in Compton
            Might write this for the doctorate, tell the pop star quit hidin'
            Fuck a caption, want action, no accident
            And I'm hands-on, he fuck around, get polished
            Fucked on Wayne girl while he was in jail, that's connivin'
            Then get his face tatted like a bitch apologizin'
            I'm glad DeRoz' came home, y'all didn't deserve him neither
            From Alondra down to Central, nigga better not speak on Serena
            And your homeboy need subpoena, that predator move in flocks
            That name gotta be registered and placed on neighborhood watch
            I lean on you niggas like another line of Wock'
            Yeah, it's all eyes on me, and I'ma send it up to Pac, ayy
            Put the wrong label on me, I'ma get 'em dropped, ayy
            Sweet Chin Music and I won't pass the aux, ayy
            How many stocks do I really have in stock? Ayy
            One, two, three, four, five, plus five, ayy
            Devil is a lie, he a 69 God, ayy
            Freaky-ass niggas need to stay they ass inside, ayy
            Roll they ass up like a fresh pack of 'za, ayy
            City is back up, it's a must, we outside, ayy
            [Chorus]
            They not like us, they not like us, they not like us
            They not like us, they not like us, they not like us

            [Verse 3]
            Once upon a time, all of us was in chains
            Homie still doubled down callin' us some slaves
            Atlanta was the Mecca, buildin' railroads and trains
            Bear with me for a second, let me put y'all on game
            The settlers was usin' townfolk to make 'em richer
            Fast-forward, 2024, you got the same agenda
            You run to Atlanta when you need a check balance
            Let me break it down for you, this the real nigga challenge
            You called Future when you didn't see the club (Ayy, what?)
            Lil Baby helped you get your lingo up (What?)
            21 gave you false street cred
            Thug made you feel like you a slime in your head (Ayy, what?)
            Quavo said you can be from Northside (What?)
            2 Chainz say you good, but he lied
            You run to Atlanta when you need a few dollars
            No, you not a colleague, you a fuckin' colonizer
            The family matter and the truth of the matter
            It was God's plan to show y'all the liar

            [Bridge]
            Mm
            Mm-mm
            He a fan, he a fan, he a fan (Mm)
            He a fan, he a fan, he a
            Freaky-ass nigga, he a 69 God
            Freaky-ass nigga, he a 69 God
            Hey, hey, hey, hey, run for your life
            Hey, hey, hey, hey, run for your life
            Freaky-ass nigga, he a 69 God
            Freaky-ass nigga, he a 69 God
            Hey, hey, hey, hey, run for your life
            Hey, hey, hey, hey, run for your life
            Let me hear you say, "OV-ho" (OV-ho)
            Say, "OV-ho" (OV-ho)
            Then step this way, step that way
            Then step this way, step that way
            [Outro]
            Are you my friend?
            Are we locked in?
            Then step this way, step that way
            Then step this way, step that way`
        },    

         {
            id: '44',
            title:'APT',
            artist:'ROSE, Bruno Mars',
            description:'"APT (Apartment)" by Rosé and Bruno Mars is a soft and introspective ballad about loneliness, memories, and emotional distance within a familiar space.',
            cover:'../assets/Home/apt..jpeg',
            file:'../assets/Songs/ROSÈ & Bruno Mars - APT. (Official Audio).mp3',
            lyric:
            `[Intro]
            Chaeyoung-iga joahaneun
            Random game
            Random game
            Game start

            [Chorus: ROSÉ]
            Apateu, apateu
            Apateu, apateu
            Apateu, apateu
            Uh, uh-huh, uh-huh
            Apateu, apateu
            Apateu, apateu
            Apateu, apateu
            Uh, uh-huh, uh-huh

            [Verse 1: ROSÉ]
            Kissy face, kissy face
            Sent to your phone, but
            I'm tryna kiss your lips for real (Uh-huh, uh-huh)
            Red hearts, red hearts
            That's what I'm on, yeah
            Come give me somethin' I can feel, oh-oh, oh

            [Pre-Chorus: ROSÉ]
            Don't you want me like I want you, baby?
            Don't you need me like I need you now?
            Sleep tomorrow, but tonight, go crazy
            All you gotta do is just meet me at the
            [Chorus: ROSÉ]
            Apateu, apateu
            Apateu, apateu
            Apateu, apatеu
            Uh, uh-huh, uh-huh
            Apateu, apateu
            Apateu, apatеu
            Apateu, apateu
            Uh, uh-huh, uh-huh

            [Verse 2: Bruno Mars, ROSÉ, Bruno Mars & ROSÉ]
            It's whatever (Whatever), it's whatever (Whatever)
            It's whatever (Whatever) you like (Woo)
            Turn this apateu into a club (Uh-huh, uh-huh)
            I'm talkin' drink, dance, smoke, freak, party all night (Come on)
            Geonbae, geonbae, girl, what's up? Oh-oh, oh

            [Pre-Chorus: Bruno Mars & ROSÉ]
            Don't you want me like I want you, baby?
            Don't you need me like I need you now?
            Sleep tomorrow, but tonight, go crazy
            All you gotta do is just meet me at the

            [Chorus: ROSÉ]
            Apateu, apateu
            Apateu, apateu
            Apateu, apateu
            Uh, uh-huh, uh-huh
            Apateu, apateu
            Apateu, apateu
            Apateu, apateu
            Uh, uh-huh, uh-huh
            [Bridge: ROSÉ, ROSÉ & Bruno Mars]
            Hey, so now you know the game
            Are you ready?
            'Cause I'm comin' to get ya, get ya, get ya
            Hold on, hold on
            I'm on my way
            Yeah, yeah, yeah-yeah, yeah
            I'm on my way
            Hold on, hold on
            I'm on my way
            Yeah, yeah, yeah-yeah, yeah
            I'm on my way

            [Pre-Chorus: ROSÉ & Bruno Mars]
            Don't you want me like I want you, baby?
            Don't you need me like I need you now?
            Sleep tomorrow, but tonight, go crazy
            All you gotta do is just meet me at the

            [Chorus: ROSÉ, Bruno Mars, ROSÉ & Bruno Mars]
            Apateu, apateu
            Apateu, apateu
            Apateu, apateu
            Just meet me at the (Uh, uh-huh, uh-huh)
            Apateu, apateu
            Apateu, apateu
            Apateu, apateu
            Just meet me at the (Uh, uh-huh, uh-huh)
            Apateu, apateu
            Apateu, apateu
            Apateu, apateu
            Just meet me at the (Uh, uh-huh, uh-huh)
            Apateu, apateu
            Apateu, apateu
            Apateu, apateu
            Uh, uh-huh, uh-huh`
        },    

         {
            id: '45',
            title:'BIRDS OF FEATHER',
            artist:'Billie Eilish ',
            description:'"Birds of a Feather" by Billie Eilish is a haunting love song about wanting to be inseparable with someone—through life and even death.',
            cover:'../assets/Home/birdsoffeather.jpeg',
            file:'../assets/Songs/Billie Eilish - BIRDS OF A FEATHER (Audio) (1).mp3',
            lyric:
            `[Intro]
            (But I wanna stay)

            [Verse 1]
            I want you to stay
            'Til I'm in the grave
            'Til I rot away, dead and buried
            'Til I'm in the casket you carry
            If you go, I'm goin' too, uh
            'Cause it was always you (Alright)
            And if I'm turnin' blue, please don't save me
            Nothin' left to lose without my baby

            [Refrain]
            Birds of a feather, we should stick together, I know
            I said I'd never think I wasn't better alone
            Can't change the weather, might not be forever
            But if it's forever, it's even better

            [Pre-Chorus]
            And I don't know what I'm cryin' for
            I don't think I could love you more
            It might not be long, but baby, I

            [Chorus]
            I'll love you 'til the day that I die
            'Til the day that I die
            'Til the light leaves my eyes
            'Til the day that I die
            [Verse 2]
            I want you to see, hm
            How you look to me, hm
            You wouldn't believe if I told ya
            You would keep the compliments I throw ya
            But you're so full of shit, uh
            Tell me it's a bit, oh
            Say you don't see it, your mind's polluted
            Say you wanna quit, don't be stupid

            [Pre-Chorus]
            And I don't know what I'm cryin' for
            I don't think I could love you more
            It might not be long, but baby, I
            Don't wanna say goodbye

            [Chorus]
            Birds of a feather, we should stick together, I know ('Til the day that I die)
            I said I'd never think I wasn't better alone ('Til the light leaves my eyes)
            Can't change the weather, might not be forever ('Til the day that I die)
            But if it's forever, it's even better

            [Post-Chorus]
            I knew you in another life
            You had that same look in your eyes
            I love you, don't act so surprised`
        },    

         {
            id: '46',
            title:'Please Please Please',
            artist:'Sabrina Carpenter',
            description:'"Please Please Please" by Sabrina Carpenter is a pop plea for a partner to act right and not ruin the fragile, budding love between them.',
            cover:'../assets/Home/pleasepleaseplease.jpeg',
            file:'../assets/Songs/Please Please Please.mp3',
            lyric:
            `[Verse 1]
            I know I have good judgment, I know I have good taste
            It's funny and it's ironic that only I feel that way
            I promise 'em that you're different and everyone makes mistakes
            But just don't
            I heard that you're an actor, so act like a stand-up guy
            Whatever devil's inside you, don't let him out tonight
            I tell them it's just your culture and everyone rolls their eyes
            Yeah, I know
            All I'm asking, baby

            [Chorus]
            Please, please, please
            Don't prove I'm right
            And please, pleasе, please
            Don't bring me to tеars when I just did my makeup so nice
            Heartbreak is one thing, my ego's another
            I beg you, don't embarrass me, motherfucker, oh
            Please, please, please (Ah)

            [Verse 2]
            Well, I have a fun idea, babe (Uh-huh), maybe just stay inside
            I know you're cravin' some fresh air, but the ceiling fan is so nice (It's so nice, right?)
            And we could live so happily if no one knows that you're with me
            I'm just kidding, but really (Kinda), really, really
            [Chorus]
            Please, please, please (Please don't prove I'm right)
            Don't prove I'm right
            And please, please, please
            Don't bring me to tears when I just did my makeup so nice
            Heartbreak is one thing (Heartbreak is one thing), my ego's another (Ego's another)
            I beg you, don't embarrass me, motherfucker, oh
            Please, please, please (Ah)

            [Outro]
            If you wanna go and be stupid
            Don't do it in front of me
            If you don't wanna cry to my music
            Don't make me hate you prolifically
            Please, please, please (Please)
            Please, please, please (Please)
            Please (Please), please (Please), please
            (Ah)`
        },    

         {
            id: '47',
            title:'I.F.L.Y.',
            artist:'Bazzi',
            description:'"I.F.L.Y" by Bazzi is a dreamy, romantic song expressing deep affection and the euphoric feeling of being in love',
            cover:'../assets/Home/ifly.jpg',
            file:'../assets/Songs/I.F.L.Y..mp3',
            lyric:
            `[Intro]
            This my baby
            This my
            Look

            [Verse 1]
            Touchin' you slowly, love how you hold me
            I was a player, that was the old me
            I sent a prayer for something holy
            Got naked and show me
            Girl, summer's been lonely, yeah
            At first, I was hesitant
            (Spooky) Like a skeleton
            You 20, but intelligent
            Now all them other bitches so irrelevant, ah-ah, yeah
            Tan lines and some memories (Woo)
            Guess summer got the best of me (Woo)
            Chef B with the recipe, yeah
            With you, it's a better me

            [Chorus]
            I guess what I'm sayin', I guess what I'm sayin'
            I guess what I'm sayin' is, I
            I fuckin' love you
            I guess what I'm sayin', I guess what I'm sayin'
            I guess what I'm sayin' is, I
            I fuckin' love you (Ah, yeah)
            Love you through the better days
            Love you through the rainy ones
            Champion, you're number one, yeah, that's true
            I guess what I'm sayin', I guess what I'm sayin'
            I guess what I'm sayin' is, I
            I fuckin' love you (Ah, yeah, ah)
            [Verse 2]
            Yes, I do, chillin' top floor with a penthouse view
            But that don't mean a thing unless I'm next to you
            'Cause money just money 'less I spend it on you
            Next to me, when I'm with you, you bring out the best of me
            God made you a twin, but you the one I see
            But shoutout to Elisha, that's my baby, yeah, yeah, yeah
            But if I wrote you a love song, would you sing it?
            If I needed bail out of jail, would you bring it?
            If I win, then we're up, if we fail, then we wing it

            [Chorus]
            I guess what I'm sayin', I guess what I'm sayin'
            I guess what I'm sayin' is, I
            I fuckin' love you (I do)
            I guess what I'm sayin', I guess what I'm sayin'
            I guess what I'm sayin' is, I
            I fuckin' love you (I do, I do, I do, ah)
            Love you through the better days (Yeah, yeah, yeah)
            Love you through the rainy ones
            Champion, you're number one, yeah, that's true
            But I guess what I'm sayin', I guess what I'm sayin'
            I guess what I'm sayin' is, I
            I fuckin' love you (Ah, yeah)

            [Outro]
            That's my baby, yeah
            My baby, uh, uh
            My baby, yeah
            That's my baby, yeah
            My baby, uh, uh
            My baby`
        },

         {
            id: '48',
            title:'My Evrything',
            artist:'Ariana Grande',
            description:'"My Everything" by Ariana Grande is a heartfelt ballad mourning the loss of someone who meant the world, with emotional vulnerability.',
            cover:'../assets/Home/myeverything.jpeg',
            file:'../assets/Songs/My Everything.mp3',
            lyric:
            `[Verse 1]
            I cried enough tears to see my own reflection in them
            And then it was clear
            I can't deny, I really miss it
            To think that I was wrong
            I guess you don't know what you got 'til it's gone
            Pain is just a consequence of love
            I'm saying sorry for the sake of us

            [Chorus]
            He wasn't my everything 'til we were nothing
            And it's taking me a lot to say
            But now that he's gone, my heart is missing something
            So it's time I push my pride away
            'Cause you are, you are
            You are my everything
            You are, you are
            You are my everything

            [Verse 2]
            I know you're not far, but I still can't handle all the distance
            You're traveling with my heart
            I hope this is a temporary feeling
            'Cause it's too much to bear without you
            And I know "sorry" ain't the cure
            If I cross your mind, just know I'm yours
            'Cause what we got is worth fighting for
            'Cause you are
            [Chorus]
            You weren't my everything 'til we were nothing
            And it's taking me a lot to say
            Now that you're gone, my heart is missing something
            So it's time I push my pride away
            You are, you are
            You are my everything
            You are, you are
            You are my everything

            [Outro]
            Ooh, mm-ah, yeah
            You are, you are, you are, ooh
            You are, you are, you are
            My everything`
        },    

         {
            id: '49',
            title:'Seven',
            artist:'Jungkook',
            description:'"Seven" by Jungkook is a passionate and sensual track promising love and intimacy every day of the week.',
            cover:'../assets/Home/seven.jpeg',
            file:'../assets/Songs/Seven (feat. Latto) - Clean Ver..mp3',
            lyric:
            `[Verse 1: Jung Kook]
            Weight of the world on your shoulders
            I kiss your waist and ease your mind
            I must be favored to know ya
            I take my hands and trace your lines

            [Pre-Chorus: Jung Kook]
            It's the way that we can ride
            It's the way that we can ride (Oh-oh-oh-oh)
            Think I met you in another life
            So break me off another time (Oh-oh-oh-oh)
            You wrap around me and you give me life
            And that's why night after night
            I'll be lovin' you right

            [Chorus: Jung Kook]
            Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday (A week)
            Monday, Tuesday, Wednesday, Thursday, Friday
            Seven days a week
            Every hour, every minute, every second
            You know night after night
            I'll be lovin' you right
            Seven days a week

            [Verse 2: Jung Kook]
            You love when I jump right in
            All of me I'm offerin'
            Show you what devotion is
            Deeper than the ocean is
            Wind it back, I'll take it slow
            Leave you with that afterglow
            Show you what devotion is
            Deeper than the ocean is
            [Pre-Chorus: Jung Kook]
            It's the way that we can ride
            It's the way that we can ride (Oh-oh-oh-oh)
            Think I met you in another life
            So break me off another time (Oh-oh-oh-oh)
            You wrap around me and you give me life
            And that's why night after night
            I'll be lovin' you right

            [Chorus: Jung Kook & Latto]
            Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday (A week)
            Monday, Tuesday, Wednesday, Thursday, Friday
            Seven days a week
            Every hour, every minute, every second
            You know night after night
            I'll be lovin' you right (I'll be lovin' you right)
            Seven days a week
            Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday (A week)
            Monday, Tuesday, Wednesday, Thursday, Friday
            Seven days a week (Oh, oh, seven days a week)
            Every hour, every minute, every second
            You know night after night (Night after night)
            I'll be lovin' you right (I'll be lovin' you right)
            Seven days a week
            (Big Latto)
            [Verse 3: Latto & Jung Kook]
            Tightly take control, tightly take his soul
            Take your phone and put it in the camera roll (Uh)
            Leave them clothes at the door
            What you waiting for? Better come and hit ya goals
            He jump in it both feet
            Going to the sun-up, we ain't gettin' no sleep
            Seven days a week, seven different sheets
            Seven different angles, I can be your fantasy
            Open up, say, "Ah"
            Come here, baby, let me swallow your pride
            What you on? I can match your vibe
            Hit me up and I'ma Cha Cha Slide
            You make Mondays feel like weekends
            I make him never think about cheatin'
            Got you skippin' work and meetings
            Let's sleep in, yeah
            (Seven days a week, ooh)

            [Chorus: Jung Kook]
            Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday (A week)
            Monday, Tuesday, Wednesday, Thursday, Friday
            Seven days a week
            Every hour, every minute, every second (Oh-oh-oh)
            You know night after night
            I'll be lovin' you right
            Seven days a week (Oh)
            Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday (A week)
            Monday, Tuesday, Wednesday, Thursday, Friday (Ooh, ooh, ooh, ooh, ooh)
            Seven days a week
            Every hour, every minute, every second (Hour, minute, second)
            You know night after night
            I'll be lovin' you right
            Seven days a week`
        },    

        {
            id: '50',
            title:'All Time Low',
            artist:'Jon Bellion',
            description:'"All Time Low" by Jon Bellion is a catchy yet vulnerable song about the emotional crash after losing someone who meant everything.',
            cover:'../assets/Home/alltimelow.jpeg',
            file:'../assets/Songs/Jon Bellion - All Time Low (Audio).mp3',
            lyric:
            `[Verse 1]
            I was the knight in shining armor in your movie
            Would put your lips on mine and love the aftertaste
            Now I'm a ghost, I call your name, you look right through me
            You're the reason I'm alone and masturbate

            [Pre-Chorus]
            I (I, I), yeah, I been trying to fix my pride
            But that shit's broken, that shit's broken
            Lie (Lie, lie), lie, l-lie I tried to hide
            But now you know it

            [Chorus]
            That I'm at an all time
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low (Woo, woah, oh-oh)

            [Verse 2]
            I was the prototype like 3 Stacks on that CD
            An example of the perfect candidate
            Now all your girlfriends say that you don't want to see me
            You're the reason that I just can't concentrate
            [Pre-Chorus]
            I (I, I), yeah, I been trying to fix my pride
            But that shit's broken, that shit's broken
            Lie (Lie, lie), lie, l-lie I tried to hide
            But now you know it

            [Chorus]
            That I'm at an all time
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low (Woo, woah)
            Low, low, low, low, low, low, low, low, low (Woo, woah, oh-oh)
            Low, low, low, low, low, low, low, low, low (Woo, woah)
            Low, low, low, low, low, low, low, low, low (Woo, woah, oh-oh)

            [Bridge]
            I (I, I), I been trying to fix my pride
            But that shit's broken, that shit's broken
            Lie (Lie, lie), lie, l-lie I tried to hide
            But now you know it
            That I'm at an all time
            Low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low, low, low
            Low, low
            Low, low, low, low, low, low, low, low, low, low, low
            Low (Low, low, low, low, low, low, low, low, low)
            Lie, l-lie, I try to hide, but now you know it
            (Low, low, low, low, low, low, low, low, low)
            (Low, low, low, low, low, low, low, low, low)
            That I'm at an all time
            Hey
            [Chorus]
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low
            Low, low, low, low, low, low, low, low, low (Woo, woah)
            Low, low, low, low, low, low, low, low, low (Woo, woah, oh-oh)
            Low, low, low, low, low, low, low, low, low (Woo, woah)
            Low, low, low, low, low, low, low, low, low (Woo, woah, oh-oh)

            [Outro]
            Low, low, low, low, low, low, low, low, low (Woo, woah)
            Low, low, low, low, low, low, low, low, low (Woo, woah, oh-oh)
            Low, low, low, low, low, low, low, low, low (Woo, woah)
            Low, low, low, low, low, low, low, low, low (Woo, woah, oh-oh)`
        },    



        


    ];
    const params = new URLSearchParams(window.location.search);
    const songId = params.get('id');
    const song = songs.find(s=> s.id == songId);
    //load songs
    function loadSongFromDetail() {
        audio.src = song.file;
        audio.load();
        audio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
    }
    //play pause
    playIcon.addEventListener("click", ()=>{
        audio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline";
    });
    pauseIcon.addEventListener("click", ()=> {
        audio.pause();
        playIcon.style.display = "inline";
        pauseIcon.style.display = "none";
    });

    ///fungsi format detik ke menit:detik
    function formatTime(seconds) {
        const mins = Math.floor(seconds/60);
        const secs = Math.floor (seconds % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }
    //Update time & slider
    audio.addEventListener("timeupdate", ()=>{
        seekSlider.value=(audio.currentTime / audio.duration) * 100;
        currentTime.textContent = formatTime(audio.currentTime);
    });

    //slider ke posisi tertentu dan lagu ikut berubah
    seekSlider.addEventListener("input", ()=>{
        if(!isNaN(audio.duration)){
            const previewTime = (seekSlider.value/100) * audio.duration;
            currentTime.textContent = formatTime(previewTime);
        }
    })
    seekSlider.addEventListener("change", () =>{
        if (!isNaN(audio.duration)){
            const seekTo = (seekSlider.value/100) * audio.duration;
            audio.currentTime = seekTo;
        }
    })

    audio.addEventListener("loadedmetadata", () =>{
        durationTime.textContent= formatTime(audio.duration);
    })
    if (song){
        document.querySelectorAll('.song-name-value').forEach(el => {
            el.textContent = song.title;
        });
        document.querySelectorAll('.song-artist-value').forEach(el => {
            el.textContent = song.artist;
        });
        document.querySelector('.song-desc-value').textContent = song.description;
        document.querySelectorAll('.song-cover').forEach(el => {
            el.src = song.cover;
        });
        document.querySelector('.lyrics').textContent = song.lyric;
        loadSongFromDetail();
    }

    
})