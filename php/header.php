        <header class = "header section">
            <a href = "/" class="logo">
                <img src="/images/logo.png" alt="" class="logo-pic">
            </a>
            <div class = "menu-area">
                <div class="menu-area-w"></div>
                <div class="menu-icon"><span></span><span></span><span></span><span></span></div>
            </div>
            <nav class = "nav">
                <ul class = "nav-list">
                    <li class = "nav-list-item">
                        <a href="/" class="nav-list-link<? if ($_SERVER['REQUEST_URI'] == '/'):?><?=' active'?><?endif?>">Главная</a>
                    </li>
                    <li class = "nav-list-item">
                        <a href="/programma-spk/" class="nav-list-link<? if ($_SERVER['REQUEST_URI'] == '/programma-spk/'):?><?=' active'?><?endif?>">Программа «СПК»</a>
                    </li>
                    <li class = "nav-list-item">
                        <a href="/inzhenernye-sistemy/" class="nav-list-link<? if ($_SERVER['REQUEST_URI'] == '/inzhenernye-sistemy/'):?><?=' active'?><?endif?>">Программа «ИНЖЕНЕРНЫЕ СИСТЕМЫ»</a>
                    </li>
                    <li class = "nav-list-item">
                        <a href="/mebelnye-komplektyushie/" class="nav-list-link<? if ($_SERVER['REQUEST_URI'] == '/mebelnye-komplektyushie/'):?><?=' active'?><?endif?>">«МЕБЕЛЬНЫЕ КОМПЛЕКТУЮЩИЕ»</a>
                    </li>
                </ul>
            </nav>
        </header>
