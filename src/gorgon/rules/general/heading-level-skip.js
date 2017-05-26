const Rule = require("../../rule.js");

module.exports = Rule.makeRule({
    name: "heading-level-skip",
    selector: "heading ~ heading",
    lint: function(nodes) {
        const currentHeading = nodes[1];
        const previousHeading = nodes[0];
        // A heading can have a level less than, the same as
        // or one more than the previous heading. But going up
        // by 2 or more levels is not right
        if (currentHeading.level > previousHeading.level + 1) {
            return `Skipped heading level:
this heading is level ${currentHeading.level} but
the previous heading was level ${previousHeading.level}`;
        }
    },
});