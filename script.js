const sideItem = document.querySelectorAll(".side-item");

sideItem.forEach(function (item) {
    item.addEventListener('click', function () {
        sideItem.forEach(function (i) {
            i.classList.remove('selected')
        });

        item.classList.add('selected');
    });
});

const btns = document.querySelectorAll('.btn-group button');
const labels = { kills: 'Kills', kd: 'K:D', acs: 'ACS' };

btns.forEach(btn => {
    btn.addEventListener('click', function () {
        btns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const stat = this.dataset.stat;

        document.getElementById('col-header').textContent = labels[stat];

        render(stat);
    });
});

const data = {
    kills: [
        { rank: '1', flag: 'images/flags/sout-korea.svg', name: 'flashback', team: 'images/team-logos/drx-logo.png', value: 380 },
        { rank: '2', flag: 'images/flags/poland.svg', name: 'kaajak', team: 'images/team-logos/fnatic-logo.png', value: 372 },
        { rank: '3', flag: 'images/flags/sout-korea.svg', name: 'hyunmin', team: 'images/team-logos/drx-logo.png', value: 362 },
        { rank: '4', flag: 'images/flags/russia.svg', name: 'chronicle', team: 'images/team-logos/fnatic-logo.png', value: 326 },
        { rank: '5', flag: 'images/flags/brazil.svg', nome: 'aspas', team: 'images/team-logos/mibr-logo.png', value: 319 }
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

