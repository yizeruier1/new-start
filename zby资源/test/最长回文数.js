// 验证  回文数
var isPalindrome = function (x) {
    var str = x + "";
    if (str.length === 1) {
        return true
    }

    var start = 0;
    var end = str.length - 1;

    while (end > start) {
        if (str.substr(end, 1) !== str.substr(start, 1)) {
            return false;
        }
        start++;
        end--;
    }

    return true;
};



// 找出最长回文数
var longestPalindrome = function (s) {
    return MidGetFunc(s);
};


function MidGetFunc(s) {
    if (!s || !s.length) {
        return "";
    }

    const len = s.length;
    if (len == 1) {
        return s;
    }

    let maxFindLen = 0;
    let left = 0;
    let right = 0;

    for (let i = 0; i < len; ++i) {
        let len1 = GetMidMaxRound(s, i, i);
        let len2 = GetMidMaxRound(s, i, i + 1);
        let maxLen = Math.max(len1, len2);
        if (maxLen > maxFindLen) {
            maxFindLen = maxLen;
            left = i - Math.floor((maxFindLen - 1) / 2);
            right = i + Math.floor(maxFindLen / 2);
        }
    }

    return s.substring(left, right + 1);

}

function GetMidMaxRound(s, start, end) {
    let left = start;
    let right = end;
    const len = s.length;
    while (left >= 0 && right < len && s.charAt(left) == s.charAt(right)) {
        ++right;
        --left;
    }
    return right - left - 1;
}