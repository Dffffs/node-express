let fortuneCookies = [
    '第一句',
    '第二句',
    '鲁迅曾经说过:傻人有傻福,傻逼没有.'
];

exports.getFourtune = () => {
    let idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
};