// Educational Data for Computer Networks and Internet Learning Application
// Contains structured learning materials and quiz questions for grades X, XI, XII

const educationData = {
    grades: {
        X: {
            title: "Jaringan Komputer & Internet",
            description: "Pelajari konsep dasar jaringan komputer dan internet",
            content: {
                basic: {
                    title: "Pengenalan Jaringan Komputer",
                    animationType: "basic",
                    apperception: `
                        <p>Pernahkah Anda bertanya-tanya bagaimana komputer di rumah Anda dapat terhubung ke internet? Atau bagaimana Anda bisa mengirim pesan ke teman yang berada di kota lain hanya dalam hitungan detik?</p>
                        <p>Jaringan komputer adalah teknologi yang memungkinkan perangkat elektronik untuk saling berkomunikasi dan berbagi informasi. Seperti halnya jalan raya yang menghubungkan kota-kota, jaringan komputer menghubungkan perangkat-perangkat digital di seluruh dunia.</p>
                        <p>Mari kita mulai perjalanan untuk memahami dasar-dasar jaringan komputer!</p>
                    `,
                    probing: `
                        <ul>
                            <li>Bagaimana komputer di rumah Anda terhubung ke internet?</li>
                            <li>Apa yang terjadi ketika Anda mengetik alamat website di browser?</li>
                            <li>Mengapa kadang internet terasa lambat atau tidak bisa diakses?</li>
                            <li>Bagaimana data dapat sampai dari satu komputer ke komputer lain?</li>
                        </ul>
                    `,
                    material: `
                        <h4>Definisi Jaringan Komputer</h4>
                        <p>Jaringan komputer adalah kumpulan komputer dan perangkat lain yang saling terhubung untuk berbagi data, sumber daya, dan layanan. Jaringan memungkinkan komunikasi dan kolaborasi antara pengguna di lokasi yang berbeda.</p>
                        
                        <h4>Komponen Dasar Jaringan</h4>
                        <ol>
                            <li><strong>Node</strong>: Perangkat yang terhubung ke jaringan (komputer, smartphone, printer)</li>
                            <li><strong>Link</strong>: Media penghubung antara node (kabel, wireless)</li>
                            <li><strong>Protocol</strong>: Aturan komunikasi antara perangkat</li>
                            <li><strong>Network Interface</strong>: Perangkat keras untuk mengakses jaringan</li>
                        </ol>
                        
                        <h4>Manfaat Jaringan Komputer</h4>
                        <ul>
                            <li>Berbagi file dan sumber daya</li>
                            <li>Komunikasi elektronik (email, chat)</li>
                            <li>Akses ke internet dan layanan online</li>
                            <li>Backup data terpusat</li>
                            <li>Kolaborasi dalam pekerjaan</li>
                        </ul>
                        
                        <h4>Jenis Media Transmisi</h4>
                        <p><strong>Media Berkabel:</strong></p>
                        <ul>
                            <li>Kabel Twisted Pair (UTP/STP)</li>
                            <li>Kabel Coaxial</li>
                            <li>Fiber Optic</li>
                        </ul>
                        
                        <p><strong>Media Nirkabel:</strong></p>
                        <ul>
                            <li>WiFi (IEEE 802.11)</li>
                            <li>Bluetooth</li>
                            <li>Gelombang Radio</li>
                            <li>Infrared</li>
                        </ul>
                    `,
                    reflection: `
                        <p>Setelah mempelajari konsep dasar jaringan komputer, renungkan:</p>
                        <ul>
                            <li>Bagaimana jaringan komputer telah mengubah cara kita berkomunikasi?</li>
                            <li>Komponen mana yang paling penting dalam sebuah jaringan?</li>
                            <li>Apa kelebihan dan kekurangan media berkabel vs nirkabel?</li>
                            <li>Bagaimana jaringan komputer mempengaruhi kehidupan sehari-hari Anda?</li>
                        </ul>
                        <p>Pemahaman dasar ini akan menjadi fondasi untuk mempelajari topik jaringan yang lebih kompleks.</p>
                    `
                },
                intermediate: {
                    title: "Topologi dan Arsitektur Jaringan",
                    animationType: "lan",
                    apperception: `
                        <p>Bayangkan Anda adalah seorang arsitek yang akan membangun sebuah kota. Anda harus merencanakan bagaimana jalan-jalan akan saling terhubung, di mana akan diletakkan pusat kota, dan bagaimana lalu lintas akan mengalir dengan efisien.</p>
                        <p>Dalam jaringan komputer, kita juga perlu merencanakan arsitektur dan topologi - bagaimana perangkat-perangkat akan saling terhubung dan bagaimana data akan mengalir di antara mereka.</p>
                        <p>Mari pelajari berbagai cara untuk mengatur dan menghubungkan perangkat dalam jaringan!</p>
                    `,
                    probing: `
                        <ul>
                            <li>Mengapa bentuk/susunan jaringan itu penting?</li>
                            <li>Apa yang terjadi jika satu komputer dalam jaringan bermasalah?</li>
                            <li>Bagaimana cara memilih topologi yang tepat untuk kebutuhan tertentu?</li>
                            <li>Apa perbedaan antara jaringan peer-to-peer dan client-server?</li>
                        </ul>
                    `,
                    material: `
                        <h4>Topologi Jaringan</h4>
                        <p>Topologi jaringan adalah cara pengaturan atau layout dari link, node, dan koneksi dalam jaringan.</p>
                        
                        <h5>1. Topologi Bus</h5>
                        <ul>
                            <li>Semua perangkat terhubung ke satu kabel utama (backbone)</li>
                            <li>Mudah instalasi, murah</li>
                            <li>Kelemahan: jika kabel utama rusak, seluruh jaringan down</li>
                        </ul>
                        
                        <h5>2. Topologi Star (Bintang)</h5>
                        <ul>
                            <li>Semua perangkat terhubung ke hub/switch pusat</li>
                            <li>Mudah troubleshooting, performa stabil</li>
                            <li>Kelemahan: bergantung pada perangkat pusat</li>
                        </ul>
                        
                        <h5>3. Topologi Ring (Cincin)</h5>
                        <ul>
                            <li>Perangkat terhubung membentuk lingkaran</li>
                            <li>Data mengalir satu arah</li>
                            <li>Kelemahan: jika satu node rusak, jaringan terputus</li>
                        </ul>
                        
                        <h5>4. Topologi Mesh</h5>
                        <ul>
                            <li>Setiap perangkat terhubung ke semua perangkat lain</li>
                            <li>Sangat reliable, fault tolerant</li>
                            <li>Kelemahan: mahal, kompleks</li>
                        </ul>
                        
                        <h4>Arsitektur Jaringan</h4>
                        
                        <h5>Peer-to-Peer (P2P)</h5>
                        <ul>
                            <li>Setiap komputer dapat bertindak sebagai client dan server</li>
                            <li>Cocok untuk jaringan kecil (2-10 komputer)</li>
                            <li>Murah, mudah setup</li>
                        </ul>
                        
                        <h5>Client-Server</h5>
                        <ul>
                            <li>Ada server terpusat yang menyediakan layanan</li>
                            <li>Client meminta layanan dari server</li>
                            <li>Cocok untuk jaringan besar, lebih aman</li>
                        </ul>
                        
                        <h4>Perangkat Jaringan</h4>
                        <ul>
                            <li><strong>Hub</strong>: Menghubungkan beberapa perangkat (physical layer)</li>
                            <li><strong>Switch</strong>: Lebih pintar dari hub, dapat mem-filter traffic</li>
                            <li><strong>Router</strong>: Menghubungkan antar jaringan, routing packets</li>
                            <li><strong>Access Point</strong>: Menyediakan akses wireless ke jaringan</li>
                        </ul>
                    `,
                    reflection: `
                        <p>Setelah memahami topologi dan arsitektur jaringan, pikirkan:</p>
                        <ul>
                            <li>Topologi mana yang paling cocok untuk sekolah Anda? Mengapa?</li>
                            <li>Apa keuntungan dan kerugian masing-masing topologi?</li>
                            <li>Kapan sebaiknya menggunakan arsitektur peer-to-peer vs client-server?</li>
                            <li>Bagaimana memilih perangkat jaringan yang tepat?</li>
                        </ul>
                        <p>Pemahaman tentang topologi dan arsitektur akan membantu Anda merancang jaringan yang efisien dan reliable.</p>
                    `
                },
                advanced: {
                    title: "Protokol Jaringan dan Model OSI",
                    animationType: "protocol",
                    apperception: `
                        <p>Pernahkah Anda bertanya-tanya bagaimana dua orang yang berbicara bahasa berbeda dapat berkomunikasi? Mereka membutuhkan penerjemah atau protokol komunikasi yang disepakati bersama.</p>
                        <p>Dalam jaringan komputer, perangkat yang berbeda dari vendor yang berbeda harus dapat berkomunikasi. Untuk itu, diperlukan protokol - seperangkat aturan yang mengatur bagaimana data dikirim, diterima, dan diproses.</p>
                        <p>Mari pelajari bahasa universal yang digunakan komputer untuk berkomunikasi!</p>
                    `,
                    probing: `
                        <ul>
                            <li>Bagaimana komputer dari merk berbeda bisa saling berkomunikasi?</li>
                            <li>Apa yang terjadi di balik layar ketika Anda mengakses website?</li>
                            <li>Mengapa diperlukan banyak protokol yang berbeda?</li>
                            <li>Bagaimana data dipecah dan digabung kembali dalam transmisi?</li>
                        </ul>
                    `,
                    material: `
                        <h4>Model OSI (Open Systems Interconnection)</h4>
                        <p>Model OSI adalah kerangka konseptual yang menjelaskan bagaimana aplikasi jaringan berkomunikasi melalui jaringan. Model ini terdiri dari 7 layer:</p>
                        
                        <h5>Layer 7 - Application</h5>
                        <ul>
                            <li>Interface antara user dan jaringan</li>
                            <li>Protokol: HTTP, HTTPS, FTP, SMTP, DNS</li>
                            <li>Contoh: Web browser, email client</li>
                        </ul>
                        
                        <h5>Layer 6 - Presentation</h5>
                        <ul>
                            <li>Enkripsi, kompresi, format data</li>
                            <li>Mengkonversi data ke format yang dapat dipahami</li>
                            <li>Contoh: SSL/TLS, JPEG, MPEG</li>
                        </ul>
                        
                        <h5>Layer 5 - Session</h5>
                        <ul>
                            <li>Mengelola sesi komunikasi</li>
                            <li>Membuka, memelihara, menutup koneksi</li>
                            <li>Contoh: NetBIOS, SQL sessions</li>
                        </ul>
                        
                        <h5>Layer 4 - Transport</h5>
                        <ul>
                            <li>Pengiriman data end-to-end yang reliable</li>
                            <li>Segmentasi dan reassembly data</li>
                            <li>Protokol: TCP (reliable), UDP (fast)</li>
                        </ul>
                        
                        <h5>Layer 3 - Network</h5>
                        <ul>
                            <li>Routing dan addressing</li>
                            <li>Menentukan jalur terbaik untuk data</li>
                            <li>Protokol: IP, ICMP, OSPF, BGP</li>
                        </ul>
                        
                        <h5>Layer 2 - Data Link</h5>
                        <ul>
                            <li>Frame formatting, error detection</li>
                            <li>MAC addressing, flow control</li>
                            <li>Contoh: Ethernet, WiFi, PPP</li>
                        </ul>
                        
                        <h5>Layer 1 - Physical</h5>
                        <ul>
                            <li>Transmisi bit melalui media fisik</li>
                            <li>Spesifikasi kabel, voltase, timing</li>
                            <li>Contoh: Kabel UTP, Fiber optic, Radio waves</li>
                        </ul>
                        
                        <h4>Protokol Penting dalam Jaringan</h4>
                        
                        <h5>TCP/IP Suite</h5>
                        <ul>
                            <li><strong>IP (Internet Protocol)</strong>: Addressing dan routing</li>
                            <li><strong>TCP (Transmission Control Protocol)</strong>: Reliable transport</li>
                            <li><strong>UDP (User Datagram Protocol)</strong>: Fast, unreliable transport</li>
                            <li><strong>ICMP</strong>: Error reporting dan diagnostik</li>
                        </ul>
                        
                        <h5>Protokol Aplikasi</h5>
                        <ul>
                            <li><strong>HTTP/HTTPS</strong>: Web browsing</li>
                            <li><strong>FTP</strong>: File transfer</li>
                            <li><strong>SMTP/POP3/IMAP</strong>: Email</li>
                            <li><strong>DNS</strong>: Name resolution</li>
                            <li><strong>DHCP</strong>: Automatic IP configuration</li>
                        </ul>
                        
                        <h4>Encapsulation dan De-encapsulation</h4>
                        <p>Ketika data dikirim melalui jaringan:</p>
                        <ol>
                            <li>Data diberi header di setiap layer (encapsulation)</li>
                            <li>Di penerima, header dihapus di setiap layer (de-encapsulation)</li>
                            <li>Setiap layer hanya berinteraksi dengan layer di atas dan bawahnya</li>
                        </ol>
                    `,
                    reflection: `
                        <p>Setelah mempelajari protokol jaringan dan model OSI, refleksikan:</p>
                        <ul>
                            <li>Mengapa model berlapis (layered model) penting dalam jaringan?</li>
                            <li>Bagaimana protokol yang berbeda bekerja sama untuk mengirim data?</li>
                            <li>Apa keuntungan menggunakan standar protokol yang terbuka?</li>
                            <li>Bagaimana troubleshooting jaringan dapat dilakukan berdasarkan model OSI?</li>
                        </ul>
                        <p>Pemahaman protokol akan membantu Anda memahami bagaimana internet bekerja dan bagaimana menyelesaikan masalah jaringan.</p>
                    `
                }
            },
            quiz: {
                basic: [
                    {
                        question: "Apa yang dimaksud dengan jaringan komputer?",
                        options: [
                            "Kumpulan komputer yang saling terhubung untuk berbagi data dan sumber daya",
                            "Satu komputer yang sangat besar dengan banyak monitor",
                            "Program komputer untuk mengelola data",
                            "Sistem operasi khusus untuk server"
                        ],
                        correct: 0
                    },
                    {
                        question: "Manakah yang BUKAN termasuk komponen dasar jaringan?",
                        options: [
                            "Node (perangkat yang terhubung)",
                            "Link (media penghubung)",
                            "Monitor (layar komputer)",
                            "Protocol (aturan komunikasi)"
                        ],
                        correct: 2
                    },
                    {
                        question: "Media transmisi nirkabel yang paling umum digunakan di rumah adalah:",
                        options: [
                            "Fiber Optic",
                            "Kabel Coaxial",
                            "WiFi (IEEE 802.11)",
                            "Kabel Twisted Pair"
                        ],
                        correct: 2
                    },
                    {
                        question: "Apa keuntungan utama dari jaringan komputer?",
                        options: [
                            "Membuat komputer menjadi lebih cepat",
                            "Berbagi file dan sumber daya antara perangkat",
                            "Menghemat listrik",
                            "Membuat komputer menjadi lebih aman"
                        ],
                        correct: 1
                    },
                    {
                        question: "Kabel UTP adalah singkatan dari:",
                        options: [
                            "Universal Transmission Protocol",
                            "Unshielded Twisted Pair",
                            "Ultra Transfer Process",
                            "Unified Technology Platform"
                        ],
                        correct: 1
                    }
                ],
                intermediate: [
                    {
                        question: "Dalam topologi star, jika hub/switch pusat rusak, apa yang terjadi?",
                        options: [
                            "Hanya satu komputer yang terputus",
                            "Seluruh jaringan akan terputus",
                            "Jaringan akan beralih ke topologi ring",
                            "Tidak ada pengaruh pada jaringan"
                        ],
                        correct: 1
                    },
                    {
                        question: "Topologi mana yang paling fault-tolerant (tahan terhadap kerusakan)?",
                        options: [
                            "Bus",
                            "Star",
                            "Ring",
                            "Mesh"
                        ],
                        correct: 3
                    },
                    {
                        question: "Dalam arsitektur client-server, server berfungsi untuk:",
                        options: [
                            "Meminta layanan dari client",
                            "Menyediakan layanan kepada client",
                            "Menghubungkan client ke internet",
                            "Mengatur topologi jaringan"
                        ],
                        correct: 1
                    },
                    {
                        question: "Perangkat apa yang digunakan untuk menghubungkan dua jaringan yang berbeda?",
                        options: [
                            "Hub",
                            "Switch",
                            "Router",
                            "Access Point"
                        ],
                        correct: 2
                    },
                    {
                        question: "Arsitektur peer-to-peer paling cocok untuk:",
                        options: [
                            "Jaringan besar dengan ratusan komputer",
                            "Jaringan kecil dengan 2-10 komputer",
                            "Jaringan internet global",
                            "Jaringan server enterprise"
                        ],
                        correct: 1
                    }
                ],
                advanced: [
                    {
                        question: "Layer mana dalam model OSI yang bertanggung jawab untuk routing?",
                        options: [
                            "Layer 2 (Data Link)",
                            "Layer 3 (Network)",
                            "Layer 4 (Transport)",
                            "Layer 5 (Session)"
                        ],
                        correct: 1
                    },
                    {
                        question: "Protokol TCP berbeda dengan UDP dalam hal:",
                        options: [
                            "TCP lebih cepat dari UDP",
                            "TCP menggunakan port, UDP tidak",
                            "TCP reliable, UDP unreliable",
                            "TCP untuk jaringan lokal, UDP untuk internet"
                        ],
                        correct: 2
                    },
                    {
                        question: "Pada layer mana enkripsi dan kompresi data dilakukan?",
                        options: [
                            "Layer 5 (Session)",
                            "Layer 6 (Presentation)",
                            "Layer 7 (Application)",
                            "Layer 4 (Transport)"
                        ],
                        correct: 1
                    },
                    {
                        question: "DNS (Domain Name System) berfungsi untuk:",
                        options: [
                            "Mengamankan koneksi internet",
                            "Mengkonversi nama domain ke alamat IP",
                            "Mengirim email",
                            "Mentransfer file"
                        ],
                        correct: 1
                    },
                    {
                        question: "Proses penambahan header di setiap layer OSI disebut:",
                        options: [
                            "Segmentation",
                            "Fragmentation",
                            "Encapsulation",
                            "Multiplexing"
                        ],
                        correct: 2
                    }
                ]
            }
        },
        XI: {
            title: "Arsitektur dan Protokol Internet",
            description: "Pelajari arsitektur internet dan protokol komunikasi yang lebih mendalam",
            content: {
                basic: {
                    title: "Arsitektur Internet dan World Wide Web",
                    animationType: "wan",
                    apperception: `
                        <p>Setiap hari Anda menggunakan internet untuk browsing, streaming video, bermain game online, atau berkirim pesan. Namun pernahkah Anda berpikir bagaimana miliaran perangkat di seluruh dunia dapat saling terhubung dan berkomunikasi?</p>
                        <p>Internet adalah jaringan dari jaringan - sebuah sistem global yang menghubungkan jaringan komputer di seluruh dunia. World Wide Web adalah salah satu layanan yang berjalan di atas internet.</p>
                        <p>Mari kita jelajahi arsitektur yang menakjubkan ini!</p>
                    `,
                    probing: `
                        <ul>
                            <li>Apa perbedaan antara internet dan World Wide Web?</li>
                            <li>Bagaimana data dapat melakukan perjalanan dari Indonesia ke Amerika dalam hitungan detik?</li>
                            <li>Siapa yang "memiliki" dan mengatur internet?</li>
                            <li>Mengapa alamat IP diperlukan untuk setiap perangkat yang terhubung ke internet?</li>
                        </ul>
                    `,
                    material: `
                        <h4>Sejarah dan Evolusi Internet</h4>
                        <p>Internet dimulai dari proyek ARPANET pada tahun 1960-an yang dikembangkan oleh Departemen Pertahanan AS. Tujuan awalnya adalah membuat jaringan komunikasi yang dapat bertahan dalam kondisi perang.</p>
                        
                        <h5>Timeline Penting:</h5>
                        <ul>
                            <li><strong>1969</strong>: ARPANET menghubungkan 4 komputer</li>
                            <li><strong>1973</strong>: Konsep TCP/IP dikembangkan</li>
                            <li><strong>1983</strong>: ARPANET mengadopsi TCP/IP</li>
                            <li><strong>1989</strong>: Tim Berners-Lee mengusulkan World Wide Web</li>
                            <li><strong>1991</strong>: Web browser pertama diluncurkan</li>
                            <li><strong>1995</strong>: Internet dibuka untuk komersial</li>
                        </ul>
                        
                        <h4>Arsitektur Internet</h4>
                        
                        <h5>Struktur Hierarkis Internet</h5>
                        <ol>
                            <li><strong>Tier 1 Networks</strong>: ISP global besar (AT&T, Verizon, NTT)</li>
                            <li><strong>Tier 2 Networks</strong>: ISP regional dan nasional</li>
                            <li><strong>Tier 3 Networks</strong>: ISP lokal dan perusahaan kecil</li>
                        </ol>
                        
                        <h5>Komponen Utama Internet</h5>
                        <ul>
                            <li><strong>Internet Exchange Points (IXP)</strong>: Titik pertukaran antar ISP</li>
                            <li><strong>Network Access Points (NAP)</strong>: Titik akses jaringan</li>
                            <li><strong>Internet Backbone</strong>: Infrastruktur utama internet</li>
                            <li><strong>Last Mile</strong>: Koneksi dari ISP ke pengguna akhir</li>
                        </ul>
                        
                        <h4>World Wide Web</h4>
                        <p>WWW adalah sistem informasi hypermedia yang berjalan di atas internet, menggunakan protokol HTTP/HTTPS.</p>
                        
                        <h5>Komponen WWW:</h5>
                        <ul>
                            <li><strong>URL (Uniform Resource Locator)</strong>: Alamat web</li>
                            <li><strong>HTML (HyperText Markup Language)</strong>: Bahasa markup web</li>
                            <li><strong>HTTP (HyperText Transfer Protocol)</strong>: Protokol transfer web</li>
                            <li><strong>Web Server</strong>: Server yang meng-host website</li>
                            <li><strong>Web Browser</strong>: Aplikasi untuk mengakses web</li>
                        </ul>
                        
                        <h4>Alamat IP dan DNS</h4>
                        
                        <h5>IPv4 vs IPv6</h5>
                        <ul>
                            <li><strong>IPv4</strong>: 32-bit, format xxx.xxx.xxx.xxx (192.168.1.1)</li>
                            <li><strong>IPv6</strong>: 128-bit, format xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx</li>
                            <li>IPv6 dikembangkan karena IPv4 hampir habis</li>
                        </ul>
                        
                        <h5>Sistem DNS</h5>
                        <p>DNS mengkonversi nama domain (www.google.com) menjadi alamat IP (172.217.26.36)</p>
                        <ol>
                            <li>Root DNS Servers</li>
                            <li>Top-Level Domain (TLD) Servers (.com, .org, .id)</li>
                            <li>Authoritative DNS Servers</li>
                            <li>Local DNS Servers (ISP)</li>
                        </ol>
                        
                        <h4>Organisasi Internet</h4>
                        <ul>
                            <li><strong>ICANN</strong>: Mengatur nama domain dan alamat IP</li>
                            <li><strong>IETF</strong>: Mengembangkan standar internet</li>
                            <li><strong>W3C</strong>: Mengembangkan standar web</li>
                            <li><strong>IEEE</strong>: Standar jaringan dan komunikasi</li>
                        </ul>
                    `,
                    reflection: `
                        <p>Setelah memahami arsitektur internet dan WWW, renungkan:</p>
                        <ul>
                            <li>Bagaimana internet dapat berkembang dari 4 komputer menjadi miliaran perangkat?</li>
                            <li>Mengapa struktur hierarkis penting dalam arsitektur internet?</li>
                            <li>Apa tantangan terbesar dalam pengelolaan internet global?</li>
                            <li>Bagaimana peran DNS dalam memudahkan penggunaan internet?</li>
                        </ul>
                        <p>Internet adalah salah satu pencapaian teknologi terbesar manusia yang mengubah cara kita berkomunikasi dan mengakses informasi.</p>
                    `
                },
                intermediate: {
                    title: "Protokol TCP/IP dan Routing",
                    animationType: "protocol",
                    apperception: `
                        <p>Bayangkan Anda mengirim surat dari Jakarta ke New York. Surat tersebut tidak langsung terbang ke tujuan, tetapi melewati berbagai kantor pos sebagai transit. Setiap kantor pos memiliki peran dalam memastikan surat sampai ke tujuan dengan benar.</p>
                        <p>Demikian pula, ketika Anda mengirim data melalui internet, data tersebut dipecah menjadi paket-paket kecil yang melakukan perjalanan melalui berbagai router sebelum sampai ke tujuan dan digabung kembali.</p>
                        <p>Mari pelajari bagaimana TCP/IP dan routing bekerja!</p>
                    `,
                    probing: `
                        <ul>
                            <li>Mengapa data dipecah menjadi paket-paket kecil dalam transmisi internet?</li>
                            <li>Bagaimana router mengetahui jalur terbaik untuk mengirim data?</li>
                            <li>Apa yang terjadi jika paket data hilang atau rusak di perjalanan?</li>
                            <li>Mengapa TCP dan IP dibuat sebagai protokol terpisah?</li>
                        </ul>
                    `,
                    material: `
                        <h4>TCP/IP Protocol Suite</h4>
                        <p>TCP/IP adalah kumpulan protokol yang menjadi fondasi internet. Nama ini berasal dari dua protokol utama: TCP dan IP.</p>
                        
                        <h4>Internet Protocol (IP)</h4>
                        
                        <h5>Fungsi IP:</h5>
                        <ul>
                            <li>Addressing: memberikan alamat unik untuk setiap perangkat</li>
                            <li>Routing: menentukan jalur dari sumber ke tujuan</li>
                            <li>Fragmentation: memecah paket besar menjadi fragmen kecil</li>
                            <li>Best-effort delivery: tidak menjamin pengiriman</li>
                        </ul>
                        
                        <h5>Format Header IP:</h5>
                        <ul>
                            <li>Version (4 bit): IPv4 atau IPv6</li>
                            <li>Header Length (4 bit): panjang header</li>
                            <li>Type of Service (8 bit): prioritas dan QoS</li>
                            <li>Total Length (16 bit): ukuran total paket</li>
                            <li>Identification (16 bit): untuk fragmentation</li>
                            <li>Flags (3 bit): kontrol fragmentation</li>
                            <li>Fragment Offset (13 bit): posisi fragment</li>
                            <li>Time to Live (8 bit): maksimal hop</li>
                            <li>Protocol (8 bit): protokol layer atas (TCP/UDP)</li>
                            <li>Header Checksum (16 bit): error detection</li>
                            <li>Source IP Address (32 bit)</li>
                            <li>Destination IP Address (32 bit)</li>
                        </ul>
                        
                        <h4>Transmission Control Protocol (TCP)</h4>
                        
                        <h5>Karakteristik TCP:</h5>
                        <ul>
                            <li><strong>Connection-oriented</strong>: membuat koneksi sebelum transfer data</li>
                            <li><strong>Reliable</strong>: menjamin pengiriman dan urutan data</li>
                            <li><strong>Flow control</strong>: mengatur kecepatan pengiriman</li>
                            <li><strong>Error detection dan correction</strong></li>
                            <li><strong>Congestion control</strong>: mencegah kemacetan jaringan</li>
                        </ul>
                        
                        <h5>Three-Way Handshake:</h5>
                        <ol>
                            <li>Client mengirim SYN ke server</li>
                            <li>Server merespon dengan SYN-ACK</li>
                            <li>Client mengirim ACK untuk menyelesaikan koneksi</li>
                        </ol>
                        
                        <h5>TCP Segment Header:</h5>
                        <ul>
                            <li>Source Port (16 bit)</li>
                            <li>Destination Port (16 bit)</li>
                            <li>Sequence Number (32 bit)</li>
                            <li>Acknowledgment Number (32 bit)</li>
                            <li>Window Size (16 bit): flow control</li>
                            <li>Checksum (16 bit): error detection</li>
                        </ul>
                        
                        <h4>User Datagram Protocol (UDP)</h4>
                        
                        <h5>Karakteristik UDP:</h5>
                        <ul>
                            <li><strong>Connectionless</strong>: tidak membuat koneksi</li>
                            <li><strong>Unreliable</strong>: tidak menjamin pengiriman</li>
                            <li><strong>Fast</strong>: overhead rendah</li>
                            <li><strong>Simple</strong>: header sederhana</li>
                        </ul>
                        
                        <h5>Penggunaan UDP:</h5>
                        <ul>
                            <li>DNS queries</li>
                            <li>Video streaming</li>
                            <li>Online gaming</li>
                            <li>DHCP</li>
                            <li>SNMP</li>
                        </ul>
                        
                        <h4>Routing dan Algoritma Routing</h4>
                        
                        <h5>Jenis Routing:</h5>
                        <ul>
                            <li><strong>Static Routing</strong>: route dikonfigurasi manual</li>
                            <li><strong>Dynamic Routing</strong>: route dipelajari otomatis</li>
                        </ul>
                        
                        <h5>Protokol Routing:</h5>
                        <ul>
                            <li><strong>RIP (Routing Information Protocol)</strong>: distance vector, max 15 hops</li>
                            <li><strong>OSPF (Open Shortest Path First)</strong>: link state, mendukung VLSM</li>
                            <li><strong>BGP (Border Gateway Protocol)</strong>: antar autonomous system</li>
                        </ul>
                        
                        <h5>Algoritma Routing:</h5>
                        <ul>
                            <li><strong>Distance Vector</strong>: berbagi routing table dengan neighbor</li>
                            <li><strong>Link State</strong>: setiap router memiliki peta lengkap topologi</li>
                            <li><strong>Path Vector</strong>: menyimpan path lengkap ke destination</li>
                        </ul>
                        
                        <h4>Subnetting dan VLSM</h4>
                        
                        <h5>Subnetting:</h5>
                        <p>Membagi network menjadi subnet yang lebih kecil untuk efisiensi dan keamanan.</p>
                        
                        <h5>VLSM (Variable Length Subnet Masking):</h5>
                        <p>Menggunakan subnet mask dengan panjang berbeda untuk mengoptimalkan penggunaan alamat IP.</p>
                        
                        <h5>CIDR (Classless Inter-Domain Routing):</h5>
                        <p>Notasi untuk menunjukkan network dan subnet mask, contoh: 192.168.1.0/24</p>
                    `,
                    reflection: `
                        <p>Setelah mempelajari TCP/IP dan routing, pikirkan:</p>
                        <ul>
                            <li>Mengapa TCP lebih kompleks tapi lebih reliable daripada UDP?</li>
                            <li>Bagaimana routing protocol membantu skalabilitas internet?</li>
                            <li>Apa trade-off antara static dan dynamic routing?</li>
                            <li>Mengapa subnetting penting dalam desain jaringan modern?</li>
                        </ul>
                        <p>Pemahaman TCP/IP dan routing adalah kunci untuk menguasai teknologi jaringan dan internet.</p>
                    `
                },
                advanced: {
                    title: "Keamanan Jaringan dan Teknologi Masa Depan",
                    animationType: "protocol",
                    apperception: `
                        <p>Dengan semakin terhubungnya dunia melalui internet, keamanan menjadi perhatian utama. Setiap hari, jutaan serangan cyber terjadi di seluruh dunia - mulai dari pencurian data pribadi hingga serangan terhadap infrastruktur kritis.</p>
                        <p>Di sisi lain, teknologi jaringan terus berkembang pesat. IPv6, 5G, IoT, dan cloud computing mengubah cara kita berinteraksi dengan teknologi.</p>
                        <p>Mari pelajari bagaimana mengamankan jaringan dan teknologi apa yang akan membentuk masa depan!</p>
                    `,
                    probing: `
                        <ul>
                            <li>Apa saja ancaman keamanan terbesar dalam jaringan modern?</li>
                            <li>Bagaimana teknologi seperti 5G dan IoT mengubah landscape jaringan?</li>
                            <li>Mengapa migrasi dari IPv4 ke IPv6 sangat penting?</li>
                            <li>Apa peran artificial intelligence dalam keamanan jaringan?</li>
                        </ul>
                    `,
                    material: `
                        <h4>Ancaman Keamanan Jaringan</h4>
                        
                        <h5>Jenis Serangan Umum:</h5>
                        <ul>
                            <li><strong>Malware</strong>: virus, worm, trojan, ransomware</li>
                            <li><strong>Phishing</strong>: mencuri kredensial melalui email palsu</li>
                            <li><strong>Man-in-the-Middle (MITM)</strong>: intersepsi komunikasi</li>
                            <li><strong>DDoS (Distributed Denial of Service)</strong>: membanjiri server dengan traffic</li>
                            <li><strong>SQL Injection</strong>: menyerang database melalui input</li>
                            <li><strong>Cross-Site Scripting (XSS)</strong>: injeksi script berbahaya</li>
                            <li><strong>Social Engineering</strong>: manipulasi psikologis</li>
                        </ul>
                        
                        <h4>Teknologi Keamanan Jaringan</h4>
                        
                        <h5>Firewall</h5>
                        <ul>
                            <li><strong>Packet Filtering</strong>: filter berdasarkan header paket</li>
                            <li><strong>Stateful Inspection</strong>: memantau state koneksi</li>
                            <li><strong>Application Layer</strong>: inspeksi konten aplikasi</li>
                            <li><strong>Next-Generation Firewall</strong>: AI-powered, deep packet inspection</li>
                        </ul>
                        
                        <h5>Intrusion Detection/Prevention System (IDS/IPS)</h5>
                        <ul>
                            <li><strong>Signature-based</strong>: mendeteksi pola serangan yang dikenal</li>
                            <li><strong>Anomaly-based</strong>: mendeteksi penyimpangan dari behavior normal</li>
                            <li><strong>Hybrid</strong>: kombinasi kedua metode</li>
                        </ul>
                        
                        <h5>Kriptografi</h5>
                        <ul>
                            <li><strong>Symmetric Encryption</strong>: satu kunci untuk enkripsi dan dekripsi (AES)</li>
                            <li><strong>Asymmetric Encryption</strong>: public-private key pair (RSA)</li>
                            <li><strong>Hash Functions</strong>: one-way function untuk integrity (SHA-256)</li>
                            <li><strong>Digital Signatures</strong>: autentikasi dan non-repudiation</li>
                        </ul>
                        
                        <h5>VPN (Virtual Private Network)</h5>
                        <ul>
                            <li><strong>Site-to-Site VPN</strong>: menghubungkan kantor cabang</li>
                            <li><strong>Remote Access VPN</strong>: akses dari lokasi remote</li>
                            <li><strong>Protokol</strong>: IPSec, SSL/TLS, L2TP, OpenVPN</li>
                        </ul>
                        
                        <h4>IPv6 dan Transisi dari IPv4</h4>
                        
                        <h5>Keunggulan IPv6:</h5>
                        <ul>
                            <li><strong>Address Space</strong>: 128-bit vs 32-bit IPv4</li>
                            <li><strong>Built-in Security</strong>: IPSec mandatory</li>
                            <li><strong>Better QoS</strong>: flow labeling</li>
                            <li><strong>Simplified Header</strong>: lebih efisien</li>
                            <li><strong>Auto-configuration</strong>: SLAAC</li>
                            <li><strong>No NAT Required</strong>: end-to-end connectivity</li>
                        </ul>
                        
                        <h5>Teknologi Transisi:</h5>
                        <ul>
                            <li><strong>Dual Stack</strong>: menjalankan IPv4 dan IPv6 bersamaan</li>
                            <li><strong>Tunneling</strong>: encapsulate IPv6 dalam IPv4</li>
                            <li><strong>Translation</strong>: NAT64, DNS64</li>
                        </ul>
                        
                        <h4>Teknologi Jaringan Masa Depan</h4>
                        
                        <h5>5G Networks</h5>
                        <ul>
                            <li><strong>Enhanced Mobile Broadband (eMBB)</strong>: kecepatan tinggi</li>
                            <li><strong>Ultra-Reliable Low Latency (URLLC)</strong>: aplikasi kritis</li>
                            <li><strong>Massive Machine Type Communications (mMTC)</strong>: IoT</li>
                            <li><strong>Network Slicing</strong>: virtual networks</li>
                        </ul>
                        
                        <h5>Internet of Things (IoT)</h5>
                        <ul>
                            <li><strong>Protocols</strong>: MQTT, CoAP, LoRaWAN</li>
                            <li><strong>Edge Computing</strong>: processing di edge devices</li>
                            <li><strong>Security Challenges</strong>: device diversity, update management</li>
                        </ul>
                        
                        <h5>Software-Defined Networking (SDN)</h5>
                        <ul>
                            <li><strong>Centralized Control</strong>: programmable network</li>
                            <li><strong>OpenFlow Protocol</strong>: komunikasi controller-switch</li>
                            <li><strong>Network Function Virtualization (NFV)</strong>: virtualisasi fungsi jaringan</li>
                        </ul>
                        
                        <h5>Artificial Intelligence dalam Networking</h5>
                        <ul>
                            <li><strong>Network Optimization</strong>: AI-driven routing</li>
                            <li><strong>Predictive Maintenance</strong>: prediksi kegagalan</li>
                            <li><strong>Security Analytics</strong>: deteksi anomali otomatis</li>
                            <li><strong>Intent-Based Networking</strong>: network yang self-healing</li>
                        </ul>
                        
                        <h4>Cloud Networking</h4>
                        
                        <h5>Service Models:</h5>
                        <ul>
                            <li><strong>IaaS</strong>: Infrastructure as a Service</li>
                            <li><strong>PaaS</strong>: Platform as a Service</li>
                            <li><strong>SaaS</strong>: Software as a Service</li>
                        </ul>
                        
                        <h5>Deployment Models:</h5>
                        <ul>
                            <li><strong>Public Cloud</strong>: shared infrastructure</li>
                            <li><strong>Private Cloud</strong>: dedicated infrastructure</li>
                            <li><strong>Hybrid Cloud</strong>: combination of public and private</li>
                            <li><strong>Multi-Cloud</strong>: multiple cloud providers</li>
                        </ul>
                        
                        <h4>Best Practices Keamanan</h4>
                        <ul>
                            <li><strong>Defense in Depth</strong>: multiple layers of security</li>
                            <li><strong>Zero Trust Architecture</strong>: never trust, always verify</li>
                            <li><strong>Regular Updates</strong>: patch management</li>
                            <li><strong>Security Awareness Training</strong>: human factor</li>
                            <li><strong>Incident Response Plan</strong>: preparation for breaches</li>
                            <li><strong>Backup and Recovery</strong>: business continuity</li>
                        </ul>
                    `,
                    reflection: `
                        <p>Setelah mempelajari keamanan jaringan dan teknologi masa depan, renungkan:</p>
                        <ul>
                            <li>Bagaimana keseimbangan antara keamanan dan usability dalam desain jaringan?</li>
                            <li>Apa tantangan keamanan terbesar dari adopsi IoT dan 5G?</li>
                            <li>Bagaimana AI dapat mengubah cara kita mengelola dan mengamankan jaringan?</li>
                            <li>Apa implikasi sosial dan ekonomi dari teknologi jaringan masa depan?</li>
                        </ul>
                        <p>Teknologi jaringan akan terus berkembang, dan profesional IT harus selalu belajar dan beradaptasi dengan perubahan ini.</p>
                    `
                }
            },
            quiz: {
                basic: [
                    {
                        question: "Proyek apa yang menjadi cikal bakal internet modern?",
                        options: [
                            "ENIAC Project",
                            "ARPANET",
                            "World Wide Web",
                            "TCP/IP Project"
                        ],
                        correct: 1
                    },
                    {
                        question: "Apa perbedaan utama antara Internet dan World Wide Web?",
                        options: [
                            "Internet adalah perangkat keras, WWW adalah perangkat lunak",
                            "Internet adalah infrastruktur jaringan, WWW adalah layanan yang berjalan di atasnya",
                            "Internet hanya untuk email, WWW untuk browsing",
                            "Tidak ada perbedaan, keduanya sama"
                        ],
                        correct: 1
                    },
                    {
                        question: "Organisasi mana yang mengatur alokasi alamat IP dan nama domain?",
                        options: [
                            "IEEE",
                            "IETF",
                            "ICANN",
                            "W3C"
                        ],
                        correct: 2
                    },
                    {
                        question: "Fungsi utama DNS adalah:",
                        options: [
                            "Mengamankan koneksi internet",
                            "Mengkonversi nama domain menjadi alamat IP",
                            "Mengirim email",
                            "Mentransfer file"
                        ],
                        correct: 1
                    },
                    {
                        question: "Tier 1 Networks dalam hierarki internet adalah:",
                        options: [
                            "ISP lokal dan regional",
                            "Perusahaan dan universitas",
                            "ISP global besar yang tidak membayar transit",
                            "Server web dan email"
                        ],
                        correct: 2
                    }
                ],
                intermediate: [
                    {
                        question: "Dalam three-way handshake TCP, urutan yang benar adalah:",
                        options: [
                            "ACK, SYN, SYN-ACK",
                            "SYN, ACK, SYN-ACK",
                            "SYN, SYN-ACK, ACK",
                            "SYN-ACK, SYN, ACK"
                        ],
                        correct: 2
                    },
                    {
                        question: "Keuntungan utama UDP dibandingkan TCP adalah:",
                        options: [
                            "Lebih reliable",
                            "Lebih cepat dan overhead rendah",
                            "Lebih aman",
                            "Mendukung flow control"
                        ],
                        correct: 1
                    },
                    {
                        question: "Protokol routing mana yang menggunakan algoritma link-state?",
                        options: [
                            "RIP",
                            "IGRP",
                            "OSPF",
                            "EIGRP"
                        ],
                        correct: 2
                    },
                    {
                        question: "CIDR notation /24 berarti:",
                        options: [
                            "24 host dalam subnet",
                            "24 bit pertama untuk network portion",
                            "24 subnet dalam network",
                            "24 router dalam path"
                        ],
                        correct: 1
                    },
                    {
                        question: "Time to Live (TTL) dalam header IP berfungsi untuk:",
                        options: [
                            "Menentukan prioritas paket",
                            "Mencegah infinite loop dengan membatasi jumlah hop",
                            "Mengatur kecepatan transmisi",
                            "Mengenkripsi data"
                        ],
                        correct: 1
                    }
                ],
                advanced: [
                    {
                        question: "Jenis firewall mana yang dapat melakukan deep packet inspection?",
                        options: [
                            "Packet Filtering Firewall",
                            "Stateful Inspection Firewall",
                            "Application Layer Firewall",
                            "Circuit Level Gateway"
                        ],
                        correct: 2
                    },
                    {
                        question: "Keunggulan utama IPv6 dibandingkan IPv4 adalah:",
                        options: [
                            "Lebih cepat dalam routing",
                            "Address space yang jauh lebih besar",
                            "Menggunakan lebih sedikit bandwidth",
                            "Kompatibel dengan semua perangkat lama"
                        ],
                        correct: 1
                    },
                    {
                        question: "Dalam teknologi 5G, apa yang dimaksud dengan Network Slicing?",
                        options: [
                            "Membagi spektrum frekuensi",
                            "Membagi coverage area",
                            "Membuat virtual network dengan karakteristik berbeda",
                            "Membagi data menjadi slice kecil"
                        ],
                        correct: 2
                    },
                    {
                        question: "Zero Trust Architecture prinsipnya adalah:",
                        options: [
                            "Trust but verify",
                            "Never trust, always verify",
                            "Trust internal, verify external",
                            "Always trust, never verify"
                        ],
                        correct: 1
                    },
                    {
                        question: "Software-Defined Networking (SDN) memisahkan:",
                        options: [
                            "Data dan voice traffic",
                            "Control plane dan data plane",
                            "Hardware dan software",
                            "Local dan wide area network"
                        ],
                        correct: 1
                    }
                ]
            }
        },
        XII: {
            title: "Teknologi Jaringan Enterprise dan Cloud",
            description: "Pelajari teknologi jaringan enterprise, cloud computing, dan tren teknologi terkini",
            content: {
                basic: {
                    title: "Jaringan Enterprise dan Data Center",
                    animationType: "wan",
                    apperception: `
                        <p>Bayangkan sebuah perusahaan multinasional dengan kantor di berbagai negara, ribuan karyawan, dan ribuan perangkat yang harus terhubung dengan aman dan efisien. Bagaimana mengelola infrastruktur jaringan yang begitu kompleks?</p>
                        <p>Jaringan enterprise berbeda dengan jaringan rumahan atau sekolah. Skala, kompleksitas, keamanan, dan keandalan menjadi faktor kritis yang harus dipertimbangkan.</p>
                        <p>Mari pelajari bagaimana membangun dan mengelola jaringan enterprise yang robust!</p>
                    `,
                    probing: `
                        <ul>
                            <li>Apa tantangan utama dalam mengelola jaringan perusahaan besar?</li>
                            <li>Bagaimana menjamin keamanan data saat karyawan bekerja dari berbagai lokasi?</li>
                            <li>Mengapa redundancy dan high availability penting dalam jaringan enterprise?</li>
                            <li>Bagaimana data center berperan dalam infrastruktur jaringan modern?</li>
                        </ul>
                    `,
                    material: `
                        <h4>Karakteristik Jaringan Enterprise</h4>
                        
                        <h5>Requirements Utama:</h5>
                        <ul>
                            <li><strong>Scalability</strong>: dapat berkembang sesuai kebutuhan bisnis</li>
                            <li><strong>Reliability</strong>: uptime tinggi (99.9% atau lebih)</li>
                            <li><strong>Security</strong>: perlindungan data dan sistem yang ketat</li>
                            <li><strong>Performance</strong>: response time rendah, throughput tinggi</li>
                            <li><strong>Manageability</strong>: mudah dikelola dan dimonitor</li>
                            <li><strong>Cost-effectiveness</strong>: ROI yang optimal</li>
                        </ul>
                        
                        <h4>Arsitektur Jaringan Enterprise</h4>
                        
                        <h5>Three-Tier Architecture:</h5>
                        <ol>
                            <li><strong>Core Layer</strong>: backbone berkecepatan tinggi, routing antar-building</li>
                            <li><strong>Distribution Layer</strong>: aggregation, policy enforcement, routing</li>
                            <li><strong>Access Layer</strong>: koneksi end devices, switching, PoE</li>
                        </ol>
                        
                        <h5>Collapsed Core Architecture:</h5>
                        <ul>
                            <li>Menggabungkan core dan distribution layer</li>
                            <li>Cocok untuk jaringan menengah</li>
                            <li>Lebih ekonomis, lebih sederhana</li>
                        </ul>
                        
                        <h4>Technologies dalam Enterprise Network</h4>
                        
                        <h5>VLANs (Virtual LANs)</h5>
                        <ul>
                            <li><strong>Segmentasi logis</strong>: membagi satu switch menjadi beberapa broadcast domain</li>
                            <li><strong>Trunking</strong>: membawa multiple VLANs melalui satu link</li>
                            <li><strong>InterVLAN Routing</strong>: komunikasi antar VLAN melalui router/L3 switch</li>
                            <li><strong>Benefits</strong>: security, broadcast control, flexibility</li>
                        </ul>
                        
                        <h5>Spanning Tree Protocol (STP)</h5>
                        <ul>
                            <li><strong>Loop Prevention</strong>: mencegah switching loops</li>
                            <li><strong>Root Bridge Election</strong>: memilih switch utama</li>
                            <li><strong>Port States</strong>: blocking, listening, learning, forwarding</li>
                            <li><strong>Variants</strong>: RSTP, MSTP untuk optimasi</li>
                        </ul>
                        
                        <h5>Link Aggregation (EtherChannel)</h5>
                        <ul>
                            <li><strong>Bandwidth Increase</strong>: menggabungkan multiple links</li>
                            <li><strong>Redundancy</strong>: failover otomatis</li>
                            <li><strong>Load Balancing</strong>: distribusi traffic</li>
                            <li><strong>Protocols</strong>: LACP, PAgP</li>
                        </ul>
                        
                        <h4>Data Center Networking</h4>
                        
                        <h5>Data Center Tiers:</h5>
                        <ul>
                            <li><strong>Tier I (Basic)</strong>: 99.671% uptime, single path</li>
                            <li><strong>Tier II (Redundant)</strong>: 99.741% uptime, redundant components</li>
                            <li><strong>Tier III (Concurrently Maintainable)</strong>: 99.982% uptime</li>
                            <li><strong>Tier IV (Fault Tolerant)</strong>: 99.995% uptime, fully redundant</li>
                        </ul>
                        
                        <h5>Data Center Architecture:</h5>
                        <ul>
                            <li><strong>Traditional Three-Tier</strong>: Core-Aggregation-Access</li>
                            <li><strong>Leaf-Spine</strong>: modern architecture, equal-cost paths</li>
                            <li><strong>Fabric Architecture</strong>: software-defined, programmable</li>
                        </ul>
                        
                        <h5>Storage Networking:</h5>
                        <ul>
                            <li><strong>SAN (Storage Area Network)</strong>: dedicated storage network</li>
                            <li><strong>NAS (Network Attached Storage)</strong>: file-level storage</li>
                            <li><strong>Fibre Channel</strong>: high-speed storage protocol</li>
                            <li><strong>iSCSI</strong>: SCSI over IP networks</li>
                        </ul>
                        
                        <h4>Quality of Service (QoS)</h4>
                        
                        <h5>QoS Models:</h5>
                        <ul>
                            <li><strong>Best Effort</strong>: no QoS guarantee</li>
                            <li><strong>Integrated Services (IntServ)</strong>: per-flow QoS</li>
                            <li><strong>Differentiated Services (DiffServ)</strong>: class-based QoS</li>
                        </ul>
                        
                        <h5>QoS Mechanisms:</h5>
                        <ul>
                            <li><strong>Classification</strong>: identifying traffic types</li>
                            <li><strong>Marking</strong>: tagging packets with QoS info</li>
                            <li><strong>Queuing</strong>: buffering packets</li>
                            <li><strong>Scheduling</strong>: determining transmission order</li>
                            <li><strong>Shaping/Policing</strong>: controlling traffic rate</li>
                        </ul>
                        
                        <h4>Network Management</h4>
                        
                        <h5>SNMP (Simple Network Management Protocol)</h5>
                        <ul>
                            <li><strong>Components</strong>: Manager, Agent, MIB</li>
                            <li><strong>Operations</strong>: GET, SET, TRAP</li>
                            <li><strong>Versions</strong>: v1, v2c, v3 (secure)</li>
                        </ul>
                        
                        <h5>Network Monitoring Tools:</h5>
                        <ul>
                            <li><strong>NetFlow/sFlow</strong>: traffic analysis</li>
                            <li><strong>RMON</strong>: remote monitoring</li>
                            <li><strong>Syslog</strong>: centralized logging</li>
                            <li><strong>NTP</strong>: time synchronization</li>
                        </ul>
                        
                        <h4>High Availability Design</h4>
                        
                        <h5>Redundancy Types:</h5>
                        <ul>
                            <li><strong>Device Redundancy</strong>: backup devices</li>
                            <li><strong>Link Redundancy</strong>: multiple paths</li>
                            <li><strong>Power Redundancy</strong>: UPS, dual power supplies</li>
                            <li><strong>Site Redundancy</strong>: disaster recovery sites</li>
                        </ul>
                        
                        <h5>Failover Protocols:</h5>
                        <ul>
                            <li><strong>HSRP</strong>: Hot Standby Router Protocol (Cisco)</li>
                            <li><strong>VRRP</strong>: Virtual Router Redundancy Protocol (standard)</li>
                            <li><strong>GLBP</strong>: Gateway Load Balancing Protocol</li>
                        </ul>
                    `,
                    reflection: `
                        <p>Setelah mempelajari jaringan enterprise dan data center, renungkan:</p>
                        <ul>
                            <li>Bagaimana kebutuhan bisnis mempengaruhi desain jaringan enterprise?</li>
                            <li>Mengapa high availability begitu penting dalam lingkungan bisnis?</li>
                            <li>Apa trade-off antara performance, security, dan cost dalam desain jaringan?</li>
                            <li>Bagaimana evolusi teknologi mengubah arsitektur data center?</li>
                        </ul>
                        <p>Jaringan enterprise yang baik adalah fondasi bagi kesuksesan bisnis di era digital.</p>
                    `
                },
                intermediate: {
                    title: "Cloud Computing dan Virtualisasi Jaringan",
                    animationType: "wan",
                    apperception: `
                        <p>Dahulu, setiap perusahaan harus membangun dan mengelola server serta infrastruktur IT sendiri. Kini, dengan cloud computing, perusahaan dapat menyewa infrastruktur sesuai kebutuhan, seperti menyewa listrik dari PLN.</p>
                        <p>Virtualisasi mengubah cara kita memandang sumber daya IT. Satu server fisik dapat menjalankan puluhan virtual machine, dan satu jaringan fisik dapat dibagi menjadi banyak jaringan virtual.</p>
                        <p>Mari eksplorasi revolusi cloud computing dan virtualisasi!</p>
                    `,
                    probing: `
                        <ul>
                            <li>Apa keuntungan dan kerugian migrasi ke cloud?</li>
                            <li>Bagaimana virtualisasi mengubah efisiensi penggunaan sumber daya?</li>
                            <li>Apa tantangan keamanan dalam lingkungan cloud dan virtual?</li>
                            <li>Bagaimana hybrid cloud membantu perusahaan dalam transisi digital?</li>
                        </ul>
                    `,
                    material: `
                        <h4>Cloud Computing Fundamentals</h4>
                        
                        <h5>Karakteristik Essential Cloud:</h5>
                        <ul>
                            <li><strong>On-demand Self-service</strong>: provisioning otomatis</li>
                            <li><strong>Broad Network Access</strong>: akses melalui berbagai device</li>
                            <li><strong>Resource Pooling</strong>: sharing resources</li>
                            <li><strong>Rapid Elasticity</strong>: scaling cepat</li>
                            <li><strong>Measured Service</strong>: pay-per-use</li>
                        </ul>
                        
                        <h4>Cloud Service Models</h4>
                        
                        <h5>Infrastructure as a Service (IaaS)</h5>
                        <ul>
                            <li><strong>Provides</strong>: virtual machines, storage, networks</li>
                            <li><strong>Customer manages</strong>: OS, runtime, applications</li>
                            <li><strong>Examples</strong>: AWS EC2, Google Compute Engine, Azure VMs</li>
                            <li><strong>Use cases</strong>: website hosting, development environments</li>
                        </ul>
                        
                        <h5>Platform as a Service (PaaS)</h5>
                        <ul>
                            <li><strong>Provides</strong>: development platform, databases, middleware</li>
                            <li><strong>Customer manages</strong>: applications and data</li>
                            <li><strong>Examples</strong>: Google App Engine, Azure App Service, Heroku</li>
                            <li><strong>Use cases</strong>: application development, API management</li>
                        </ul>
                        
                        <h5>Software as a Service (SaaS)</h5>
                        <ul>
                            <li><strong>Provides</strong>: complete applications</li>
                            <li><strong>Customer manages</strong>: user data and access</li>
                            <li><strong>Examples</strong>: Office 365, Salesforce, Gmail</li>
                            <li><strong>Use cases</strong>: productivity tools, CRM, email</li>
                        </ul>
                        
                        <h4>Cloud Deployment Models</h4>
                        
                        <h5>Public Cloud</h5>
                        <ul>
                            <li><strong>Owned by</strong>: cloud service provider</li>
                            <li><strong>Characteristics</strong>: shared infrastructure, cost-effective</li>
                            <li><strong>Pros</strong>: low cost, high scalability, no maintenance</li>
                            <li><strong>Cons</strong>: less control, security concerns</li>
                        </ul>
                        
                        <h5>Private Cloud</h5>
                        <ul>
                            <li><strong>Owned by</strong>: single organization</li>
                            <li><strong>Characteristics</strong>: dedicated infrastructure</li>
                            <li><strong>Pros</strong>: high control, better security, compliance</li>
                            <li><strong>Cons</strong>: high cost, limited scalability</li>
                        </ul>
                        
                        <h5>Hybrid Cloud</h5>
                        <ul>
                            <li><strong>Combination</strong>: public and private clouds</li>
                            <li><strong>Benefits</strong>: flexibility, cost optimization</li>
                            <li><strong>Use cases</strong>: burst to cloud, data sensitivity</li>
                            <li><strong>Challenges</strong>: complexity, integration</li>
                        </ul>
                        
                        <h5>Multi-Cloud</h5>
                        <ul>
                            <li><strong>Definition</strong>: multiple cloud providers</li>
                            <li><strong>Benefits</strong>: avoid vendor lock-in, best-of-breed</li>
                            <li><strong>Challenges</strong>: management complexity, cost control</li>
                        </ul>
                        
                        <h4>Network Virtualization</h4>
                        
                        <h5>Server Virtualization</h5>
                        <ul>
                            <li><strong>Hypervisor Types</strong>:</li>
                            <ul>
                                <li>Type 1 (Bare Metal): VMware vSphere, Hyper-V</li>
                                <li>Type 2 (Hosted): VMware Workstation, VirtualBox</li>
                            </ul>
                            <li><strong>Benefits</strong>: resource efficiency, isolation, portability</li>
                        </ul>
                        
                        <h5>Network Function Virtualization (NFV)</h5>
                        <ul>
                            <li><strong>Concept</strong>: replace hardware appliances with software</li>
                            <li><strong>VNFs</strong>: virtual firewalls, load balancers, routers</li>
                            <li><strong>MANO</strong>: Management and Orchestration</li>
                            <li><strong>Benefits</strong>: flexibility, cost reduction, faster deployment</li>
                        </ul>
                        
                        <h5>Software-Defined Networking (SDN)</h5>
                        <ul>
                            <li><strong>Architecture</strong>:</li>
                            <ul>
                                <li>Application Layer: business applications</li>
                                <li>Control Layer: centralized controller</li>
                                <li>Infrastructure Layer: switches and routers</li>
                            </ul>
                            <li><strong>OpenFlow</strong>: southbound protocol</li>
                            <li><strong>Controllers</strong>: OpenDaylight, ONOS, Floodlight</li>
                        </ul>
                        
                        <h4>Container Technology</h4>
                        
                        <h5>Containers vs Virtual Machines</h5>
                        <ul>
                            <li><strong>Containers</strong>: share OS kernel, lightweight</li>
                            <li><strong>VMs</strong>: separate OS, more isolation</li>
                            <li><strong>Use cases</strong>: microservices, CI/CD, scaling</li>
                        </ul>
                        
                        <h5>Container Orchestration</h5>
                        <ul>
                            <li><strong>Kubernetes</strong>: Google-originated, industry standard</li>
                            <li><strong>Docker Swarm</strong>: Docker native clustering</li>
                            <li><strong>Features</strong>: auto-scaling, load balancing, health monitoring</li>
                        </ul>
                        
                        <h4>Cloud Networking</h4>
                        
                        <h5>Virtual Private Cloud (VPC)</h5>
                        <ul>
                            <li><strong>Concept</strong>: isolated section of cloud</li>
                            <li><strong>Components</strong>: subnets, route tables, security groups</li>
                            <li><strong>Connectivity</strong>: VPN, Direct Connect, peering</li>
                        </ul>
                        
                        <h5>Load Balancing</h5>
                        <ul>
                            <li><strong>Types</strong>:</li>
                            <ul>
                                <li>Application Load Balancer (Layer 7)</li>
                                <li>Network Load Balancer (Layer 4)</li>
                                <li>Classic Load Balancer (Layer 4/7)</li>
                            </ul>
                            <li><strong>Algorithms</strong>: round-robin, least connections, weighted</li>
                        </ul>
                        
                        <h5>Content Delivery Network (CDN)</h5>
                        <ul>
                            <li><strong>Purpose</strong>: cache content closer to users</li>
                            <li><strong>Benefits</strong>: faster loading, reduced server load</li>
                            <li><strong>Providers</strong>: CloudFlare, Akamai, AWS CloudFront</li>
                        </ul>
                        
                        <h4>Cloud Security</h4>
                        
                        <h5>Shared Responsibility Model</h5>
                        <ul>
                            <li><strong>Cloud Provider</strong>: infrastructure security, physical security</li>
                            <li><strong>Customer</strong>: data encryption, access management, OS patching</li>
                            <li><strong>Varies by service model</strong>: IaaS vs PaaS vs SaaS</li>
                        </ul>
                        
                        <h5>Identity and Access Management (IAM)</h5>
                        <ul>
                            <li><strong>Concepts</strong>: users, groups, roles, policies</li>
                            <li><strong>Principles</strong>: least privilege, separation of duties</li>
                            <li><strong>Features</strong>: MFA, single sign-on, federation</li>
                        </ul>
                        
                        <h5>Data Protection</h5>
                        <ul>
                            <li><strong>Encryption</strong>: at rest and in transit</li>
                            <li><strong>Key Management</strong>: HSM, key rotation</li>
                            <li><strong>Backup and Recovery</strong>: automated backups, point-in-time recovery</li>
                        </ul>
                        
                        <h4>Cloud Migration Strategies</h4>
                        
                        <h5>6 R's of Migration</h5>
                        <ul>
                            <li><strong>Rehost</strong>: lift and shift</li>
                            <li><strong>Replatform</strong>: minimal changes</li>
                            <li><strong>Refactor</strong>: re-architect for cloud</li>
                            <li><strong>Repurchase</strong>: move to SaaS</li>
                            <li><strong>Retain</strong>: keep on-premises</li>
                            <li><strong>Retire</strong>: decommission</li>
                        </ul>
                        
                        <h5>Migration Process</h5>
                        <ol>
                            <li><strong>Assessment</strong>: inventory and dependencies</li>
                            <li><strong>Planning</strong>: timeline and resources</li>
                            <li><strong>Design</strong>: target architecture</li>
                            <li><strong>Migration</strong>: data and application transfer</li>
                            <li><strong>Validation</strong>: testing and verification</li>
                            <li><strong>Optimization</strong>: performance tuning</li>
                        </ol>
                    `,
                    reflection: `
                        <p>Setelah mempelajari cloud computing dan virtualisasi, pikirkan:</p>
                        <ul>
                            <li>Bagaimana cloud computing mengubah model bisnis IT?</li>
                            <li>Apa peran virtualisasi dalam efisiensi data center?</li>
                            <li>Bagaimana mengatasi tantangan keamanan dalam lingkungan cloud?</li>
                            <li>Apa pertimbangan utama dalam memilih strategi cloud migration?</li>
                        </ul>
                        <p>Cloud computing dan virtualisasi adalah fondasi transformasi digital modern.</p>
                    `
                },
                advanced: {
                    title: "Emerging Technologies dan Future Networks",
                    animationType: "protocol",
                    apperception: `
                        <p>Kita berada di ambang revolusi teknologi yang akan mengubah cara kita bekerja, berkomunikasi, dan menjalani kehidupan. 5G, Internet of Things, Artificial Intelligence, Edge Computing, dan Quantum Computing bukan lagi konsep futuristik, tetapi teknologi nyata yang mulai diimplementasikan.</p>
                        <p>Setiap teknologi ini membawa peluang besar sekaligus tantangan baru. Jaringan masa depan harus dapat mendukung miliaran perangkat, latency ultra-rendah, dan keamanan yang tidak dapat ditembus.</p>
                        <p>Mari jelajahi teknologi yang akan membentuk masa depan!</p>
                    `,
                    probing: `
                        <ul>
                            <li>Bagaimana 5G akan mengubah aplikasi dan layanan yang kita gunakan?</li>
                            <li>Apa tantangan keamanan dari miliaran perangkat IoT?</li>
                            <li>Bagaimana AI dapat mengoptimalkan dan mengamankan jaringan?</li>
                            <li>Apa implikasi quantum computing terhadap keamanan jaringan?</li>
                        </ul>
                    `,
                    material: `
                        <h4>5G Networks</h4>
                        
                        <h5>5G Use Cases (ITU-R IMT-2020)</h5>
                        <ul>
                            <li><strong>Enhanced Mobile Broadband (eMBB)</strong>:</li>
                            <ul>
                                <li>Peak data rate: 20 Gbps downlink, 10 Gbps uplink</li>
                                <li>Use cases: 4K/8K video, VR/AR, ultra-HD streaming</li>
                            </ul>
                            <li><strong>Ultra-Reliable Low Latency Communications (URLLC)</strong>:</li>
                            <ul>
                                <li>Latency: <1ms end-to-end</li>
                                <li>Reliability: 99.999%</li>
                                <li>Use cases: autonomous vehicles, industrial automation, remote surgery</li>
                            </ul>
                            <li><strong>Massive Machine Type Communications (mMTC)</strong>:</li>
                            <ul>
                                <li>Connection density: 1 million devices/km²</li>
                                <li>Use cases: smart cities, IoT sensors, environmental monitoring</li>
                            </ul>
                        </ul>
                        
                        <h5>5G Technology Components</h5>
                        <ul>
                            <li><strong>New Radio (NR)</strong>: 5G air interface</li>
                            <li><strong>Millimeter Wave (mmWave)</strong>: high frequency bands (24-100 GHz)</li>
                            <li><strong>Massive MIMO</strong>: hundreds of antennas</li>
                            <li><strong>Beamforming</strong>: directional signal transmission</li>
                            <li><strong>Network Slicing</strong>: virtual networks with different characteristics</li>
                            <li><strong>Edge Computing</strong>: processing closer to users</li>
                        </ul>
                        
                        <h4>Internet of Things (IoT)</h4>
                        
                        <h5>IoT Architecture</h5>
                        <ol>
                            <li><strong>Device Layer</strong>: sensors, actuators, embedded systems</li>
                            <li><strong>Connectivity Layer</strong>: communication protocols</li>
                            <li><strong>Data Processing Layer</strong>: edge computing, preprocessing</li>
                            <li><strong>Application Layer</strong>: business logic, user interfaces</li>
                        </ol>
                        
                        <h5>IoT Communication Protocols</h5>
                        <ul>
                            <li><strong>Short Range</strong>:</li>
                            <ul>
                                <li>WiFi: high bandwidth, high power</li>
                                <li>Bluetooth/BLE: low power, short range</li>
                                <li>Zigbee: mesh networking, low power</li>
                                <li>Z-Wave: home automation, mesh</li>
                            </ul>
                            <li><strong>Long Range</strong>:</li>
                            <ul>
                                <li>LoRaWAN: long range, low power</li>
                                <li>NB-IoT: cellular, low power</li>
                                <li>Sigfox: ultra-narrow band</li>
                                <li>LTE-M: cellular, mobile</li>
                            </ul>
                        </ul>
                        
                        <h5>IoT Security Challenges</h5>
                        <ul>
                            <li><strong>Device Constraints</strong>: limited processing power, memory</li>
                            <li><strong>Scale</strong>: billions of devices to secure</li>
                            <li><strong>Heterogeneity</strong>: different vendors, protocols</li>
                            <li><strong>Physical Access</strong>: devices in unsecured locations</li>
                            <li><strong>Update Mechanism</strong>: difficult to patch devices</li>
                        </ul>
                        
                        <h4>Edge Computing</h4>
                        
                        <h5>Edge Computing vs Cloud Computing</h5>
                        <ul>
                            <li><strong>Latency</strong>: edge provides ultra-low latency</li>
                            <li><strong>Bandwidth</strong>: edge reduces backhaul traffic</li>
                            <li><strong>Privacy</strong>: data processing closer to source</li>
                            <li><strong>Reliability</strong>: less dependent on network connectivity</li>
                        </ul>
                        
                        <h5>Edge Computing Architecture</h5>
                        <ul>
                            <li><strong>Cloud Edge</strong>: regional data centers</li>
                            <li><strong>Network Edge</strong>: base stations, access points</li>
                            <li><strong>Device Edge</strong>: smartphones, IoT gateways</li>
                        </ul>
                        
                        <h5>Multi-access Edge Computing (MEC)</h5>
                        <ul>
                            <li><strong>ETSI Standard</strong>: standardized edge computing</li>
                            <li><strong>Integration with 5G</strong>: edge services in RAN</li>
                            <li><strong>Applications</strong>: AR/VR, real-time analytics, content caching</li>
                        </ul>
                        
                        <h4>Artificial Intelligence in Networking</h4>
                        
                        <h5>AI/ML Applications in Networks</h5>
                        <ul>
                            <li><strong>Network Optimization</strong>:</li>
                            <ul>
                                <li>Traffic prediction and routing</li>
                                <li>Resource allocation</li>
                                <li>Quality of Service management</li>
                            </ul>
                            <li><strong>Security</strong>:</li>
                            <ul>
                                <li>Anomaly detection</li>
                                <li>Intrusion prevention</li>
                                <li>Malware identification</li>
                            </ul>
                            <li><strong>Operations</strong>:</li>
                            <ul>
                                <li>Predictive maintenance</li>
                                <li>Automated troubleshooting</li>
                                <li>Capacity planning</li>
                            </ul>
                        </ul>
                        
                        <h5>Intent-Based Networking (IBN)</h5>
                        <ul>
                            <li><strong>Concept</strong>: define what network should do, not how</li>
                            <li><strong>Components</strong>: translation, activation, assurance</li>
                            <li><strong>Benefits</strong>: automated operations, self-healing networks</li>
                        </ul>
                        
                        <h4>Quantum Computing Impact</h4>
                        
                        <h5>Quantum Computing Basics</h5>
                        <ul>
                            <li><strong>Qubits</strong>: quantum bits, superposition of 0 and 1</li>
                            <li><strong>Entanglement</strong>: correlated qubits</li>
                            <li><strong>Quantum Algorithms</strong>: Shor's, Grover's algorithms</li>
                        </ul>
                        
                        <h5>Impact on Cryptography</h5>
                        <ul>
                            <li><strong>Threat to Current Encryption</strong>:</li>
                            <ul>
                                <li>RSA, ECC vulnerable to Shor's algorithm</li>
                                <li>Symmetric encryption less affected</li>
                            </ul>
                            <li><strong>Post-Quantum Cryptography</strong>:</li>
                            <ul>
                                <li>Lattice-based cryptography</li>
                                <li>Hash-based signatures</li>
                                <li>Code-based cryptography</li>
                            </ul>
                        </ul>
                        
                        <h5>Quantum Networking</h5>
                        <ul>
                            <li><strong>Quantum Key Distribution (QKD)</strong>: unconditionally secure</li>
                            <li><strong>Quantum Internet</strong>: future quantum network</li>
                            <li><strong>Quantum Repeaters</strong>: extend quantum communication range</li>
                        </ul>
                        
                        <h4>Blockchain in Networking</h4>
                        
                        <h5>Blockchain Applications</h5>
                        <ul>
                            <li><strong>Identity Management</strong>: decentralized identity</li>
                            <li><strong>IoT Security</strong>: device authentication</li>
                            <li><strong>Network Access Control</strong>: distributed authorization</li>
                            <li><strong>Supply Chain</strong>: traceability and authenticity</li>
                        </ul>
                        
                        <h5>Challenges</h5>
                        <ul>
                            <li><strong>Scalability</strong>: transaction throughput limitations</li>
                            <li><strong>Energy Consumption</strong>: proof-of-work consensus</li>
                            <li><strong>Latency</strong>: block confirmation time</li>
                        </ul>
                        
                        <h4>Future Network Architectures</h4>
                        
                        <h5>6G Vision (2030+)</h5>
                        <ul>
                            <li><strong>Performance Targets</strong>:</li>
                            <ul>
                                <li>Peak data rate: 1 Tbps</li>
                                <li>Latency: <0.1ms</li>
                                <li>Energy efficiency: 100x improvement</li>
                            </ul>
                            <li><strong>New Use Cases</strong>:</li>
                            <ul>
                                <li>Holographic communications</li>
                                <li>Brain-computer interfaces</li>
                                <li>Digital twins</li>
                            </ul>
                        </ul>
                        
                        <h5>Satellite Networks</h5>
                        <ul>
                            <li><strong>Low Earth Orbit (LEO)</strong>: Starlink, OneWeb</li>
                            <li><strong>Benefits</strong>: global coverage, reduced latency</li>
                            <li><strong>Challenges</strong>: space debris, spectrum management</li>
                        </ul>
                        
                        <h4>Ethical and Social Implications</h4>
                        
                        <h5>Digital Divide</h5>
                        <ul>
                            <li><strong>Access Inequality</strong>: urban vs rural connectivity</li>
                            <li><strong>Affordability</strong>: cost of devices and services</li>
                            <li><strong>Digital Literacy</strong>: skills gap</li>
                        </ul>
                        
                        <h5>Privacy and Surveillance</h5>
                        <ul>
                            <li><strong>Data Collection</strong>: massive sensor networks</li>
                            <li><strong>Tracking</strong>: location and behavior monitoring</li>
                            <li><strong>Regulation</strong>: GDPR, privacy by design</li>
                        </ul>
                        
                        <h5>Environmental Impact</h5>
                        <ul>
                            <li><strong>Energy Consumption</strong>: data centers, networks</li>
                            <li><strong>E-waste</strong>: device lifecycle management</li>
                            <li><strong>Sustainability</strong>: green networking initiatives</li>
                        </ul>
                        
                        <h4>Career Paths in Future Networking</h4>
                        
                        <h5>Emerging Roles</h5>
                        <ul>
                            <li><strong>Cloud Network Architect</strong>: design cloud-native networks</li>
                            <li><strong>IoT Security Specialist</strong>: secure IoT deployments</li>
                            <li><strong>AI Network Engineer</strong>: implement AI-driven networks</li>
                            <li><strong>Edge Computing Specialist</strong>: deploy edge infrastructure</li>
                            <li><strong>Quantum Network Researcher</strong>: advance quantum networking</li>
                        </ul>
                        
                        <h5>Required Skills</h5>
                        <ul>
                            <li><strong>Technical</strong>: programming, cloud platforms, security</li>
                            <li><strong>Analytical</strong>: data analysis, problem-solving</li>
                            <li><strong>Adaptive</strong>: continuous learning, flexibility</li>
                            <li><strong>Collaborative</strong>: cross-functional teamwork</li>
                        </ul>
                    `,
                    reflection: `
                        <p>Setelah mempelajari teknologi emerging dan jaringan masa depan, renungkan:</p>
                        <ul>
                            <li>Bagaimana teknologi-teknologi ini akan mengubah cara kita bekerja dan hidup?</li>
                            <li>Apa tantangan terbesar dalam implementasi teknologi baru ini?</li>
                            <li>Bagaimana mempersiapkan diri untuk karir di bidang teknologi yang terus berkembang?</li>
                            <li>Apa tanggung jawab etis kita sebagai teknolog dalam mengembangkan teknologi masa depan?</li>
                        </ul>
                        <p>Masa depan jaringan penuh dengan peluang dan tantangan. Sebagai generasi penerus, Anda akan menjadi arsitek masa depan digital.</p>
                    `
                }
            },
            quiz: {
                basic: [
                    {
                        question: "Dalam arsitektur three-tier enterprise network, layer mana yang berfungsi sebagai backbone berkecepatan tinggi?",
                        options: [
                            "Access Layer",
                            "Distribution Layer", 
                            "Core Layer",
                            "Aggregation Layer"
                        ],
                        correct: 2
                    },
                    {
                        question: "Apa fungsi utama dari VLAN dalam jaringan enterprise?",
                        options: [
                            "Meningkatkan kecepatan jaringan",
                            "Segmentasi logis dan keamanan",
                            "Menghemat kabel jaringan",
                            "Mengurangi konsumsi listrik"
                        ],
                        correct: 1
                    },
                    {
                        question: "Data Center Tier IV memiliki karakteristik uptime:",
                        options: [
                            "99.671%",
                            "99.741%", 
                            "99.982%",
                            "99.995%"
                        ],
                        correct: 3
                    },
                    {
                        question: "Protokol mana yang digunakan untuk mencegah switching loops?",
                        options: [
                            "VLAN",
                            "VTP",
                            "STP",
                            "LACP"
                        ],
                        correct: 2
                    },
                    {
                        question: "Dalam QoS, apa yang dimaksud dengan 'marking'?",
                        options: [
                            "Mengidentifikasi jenis traffic",
                            "Menandai paket dengan informasi QoS",
                            "Menyimpan paket dalam buffer",
                            "Mengontrol kecepatan traffic"
                        ],
                        correct: 1
                    }
                ],
                intermediate: [
                    {
                        question: "Karakteristik essential cloud computing yang memungkinkan scaling otomatis adalah:",
                        options: [
                            "On-demand Self-service",
                            "Broad Network Access",
                            "Rapid Elasticity", 
                            "Measured Service"
                        ],
                        correct: 2
                    },
                    {
                        question: "Dalam shared responsibility model cloud, siapa yang bertanggung jawab atas keamanan data?",
                        options: [
                            "Cloud provider sepenuhnya",
                            "Customer sepenuhnya",
                            "Dibagi antara provider dan customer",
                            "Pihak ketiga (auditor)"
                        ],
                        correct: 2
                    },
                    {
                        question: "Perbedaan utama antara containers dan virtual machines adalah:",
                        options: [
                            "Containers lebih lambat",
                            "Containers share OS kernel, VMs memiliki OS terpisah",
                            "VMs lebih ringan",
                            "Containers tidak dapat di-scale"
                        ],
                        correct: 1
                    },
                    {
                        question: "Dalam SDN architecture, apa fungsi dari control plane?",
                        options: [
                            "Forwarding packets",
                            "Physical network connectivity",
                            "Centralized network control and decision making",
                            "User interface management"
                        ],
                        correct: 2
                    },
                    {
                        question: "Network Function Virtualization (NFV) memungkinkan:",
                        options: [
                            "Virtualisasi server saja",
                            "Mengganti appliance hardware dengan software",
                            "Hanya virtualisasi storage",
                            "Virtualisasi desktop"
                        ],
                        correct: 1
                    }
                ],
                advanced: [
                    {
                        question: "Dalam 5G, use case mana yang memerlukan latency <1ms?",
                        options: [
                            "Enhanced Mobile Broadband (eMBB)",
                            "Ultra-Reliable Low Latency Communications (URLLC)",
                            "Massive Machine Type Communications (mMTC)",
                            "Fixed Wireless Access (FWA)"
                        ],
                        correct: 1
                    },
                    {
                        question: "Teknologi 5G mana yang menggunakan ratusan antena untuk meningkatkan capacity?",
                        options: [
                            "Millimeter Wave",
                            "Network Slicing",
                            "Massive MIMO",
                            "Beamforming"
                        ],
                        correct: 2
                    },
                    {
                        question: "Apa ancaman utama quantum computing terhadap keamanan jaringan saat ini?",
                        options: [
                            "Dapat membobol semua jenis enkripsi",
                            "Dapat memecahkan enkripsi RSA dan ECC", 
                            "Menghancurkan infrastruktur jaringan",
                            "Mengkonsumsi terlalu banyak bandwidth"
                        ],
                        correct: 1
                    },
                    {
                        question: "Edge computing memberikan keuntungan utama berupa:",
                        options: [
                            "Storage capacity yang lebih besar",
                            "Biaya yang lebih murah",
                            "Latency yang lebih rendah",
                            "Keamanan yang lebih tinggi"
                        ],
                        correct: 2
                    },
                    {
                        question: "Intent-Based Networking (IBN) menggunakan AI untuk:",
                        options: [
                            "Mengganti network engineer",
                            "Mengotomatisasi konfigurasi berdasarkan intent bisnis",
                            "Meningkatkan kecepatan internet",
                            "Menghemat listrik"
                        ],
                        correct: 1
                    }
                ]
            }
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = educationData;
}
