const sideItem = document.querySelectorAll(".side-item");

sideItem.forEach(function (item) {
    item.addEventListener('click', function () {
        sideItem.forEach(function (i) {
            i.classList.remove('selected')
        });

        item.classList.add('selected');
    });
});

const btns = document.querySelectorAll('#graph-btn button');

btns.forEach(btn => {
    btn.addEventListener('click', function () {
        btns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});


const labels = { kills: 'Kills', kd: 'K:D', acs: 'ACS' };
const btnsPlayerTable = document.querySelectorAll('#player-table button');

btnsPlayerTable.forEach(btn => {
    btn.addEventListener('click', function () {
        btnsPlayerTable.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const stat = this.dataset.stat;

        document.getElementById('col-header').textContent = labels[stat];

        render(stat);
    });
});

const data = {
    kills: [
        { rank: '1', flag: 'images/flags/south-korea.png', name: 'flashback', team: 'images/team-logos/drx-logo.png', value: 380 },
        { rank: '2', flag: 'images/flags/poland.png', name: 'kaajak', team: 'images/team-logos/fnatic-logo.png', value: 372 },
        { rank: '3', flag: 'images/flags/south-korea.png', name: 'hyunmin', team: 'images/team-logos/drx-logo.png', value: 362 },
        { rank: '4', flag: 'images/flags/russia.png', name: 'chronicle', team: 'images/team-logos/fnatic-logo.png', value: 326 },
        { rank: '5', flag: 'images/flags/brazil.png', name: 'aspas', team: 'images/team-logos/mibr-logo.png', value: 319 }
    ],

    kd: [
        { rank: '1', flag: 'images/flags/brazil.png', name: 'aspas', team: 'images/team-logos/mibr-logo.png', value: 1.66 },
        { rank: '2', flag: 'images/flags/brazil.png', name: 'cortezia', team: 'images/team-logos/mibr-logo.png', value: 1.27 },
        { rank: '3', flag: 'images/flags/poland.png', name: 'kaajak', team: 'images/team-logos/fnatic-logo.png', value: 1.20 },
        { rank: '4', flag: 'images/flags/hong-kong.png', name: 'noman', team: 'images/team-logos/xlg-logo.png', value: 1.18 },
        { rank: '5', flag: 'images/flags/usa.webp', name: 'brawk', team: 'images/team-logos/nrg-logo.png', value: 1.17 }
    ],

    acs: [
        { rank: '1', flag: 'images/flags/brazil.png', name: 'aspas', team: 'images/team-logos/mibr-logo.png', value: 261.6 },
        { rank: '2', flag: 'images/flags/china.png', name: 'zmjjkk', team: 'images/team-logos/edg-logo.png', value: 237.4 },
        { rank: '3', flag: 'images/flags/taiwan.png', name: 'spiritz1', team: 'images/team-logos/drg-logo.png', value: 237.0 },
        { rank: '4', flag: 'images/flags/cambodia.png', name: 'jawgemo', team: 'images/team-logos/g2-logo.png', value: 230.4 },
        { rank: '5', flag: 'images/flags/usa.webp', name: 'zekken', team: 'images/team-logos/sentinels-logo.png', value: 229.3 }
    ]
}

function render(stat) {
    const sorted = [...data[stat]].sort((a, b) => b.value - a.value); // ✅ erro 1

    const max = sorted[0].value; // ✅ erro 2
    const body = document.getElementById('table-body');

    body.innerHTML = sorted.map((p, i) => {
        const val = p.value;                                    // ✅ erro 2
        const pct = Math.round((p.value / max) * 100);         // ✅ erro 2
        return `<tr>
            <td>${i + 1}</td>
            <td><img src="${p.flag}" class="nat-icon"> ${p.name}</td>
            <td><img src="${p.team}" class="team-icon"></td>
            <td>
                <div class="bar-wrap">
                    <div class="bar-bg">
                        <div class="bar-fill" style="width:${pct}%"></div>
                    </div>
                    ${val}
                </div>
            </td>
        </tr>`;
    }).join('');
}

render('kills');

