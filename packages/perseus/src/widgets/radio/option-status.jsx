// @flow
/**
 * Renders text indicating whether the choice was correct or
 * not and whether the choice was selected or not.
 * This information is redundant with that provided in the
 * ChoiceIcon visualizations but is meant to make the distinctions
 * between the states more immediately clear to users.
 */

import Color from "@khanacademy/wonder-blocks-color";
import * as i18n from "@khanacademy/wonder-blocks-i18n";
import {StyleSheet, css} from "aphrodite";
import * as React from "react";

class OptionStatus extends React.Component<{
    // Was this option the correct answer?
    correct: boolean,
    // Did the user select this option as the answer?
    checked: boolean,
    // Did the user cross out this option?
    crossedOut: boolean,
    // Did the user select this option as the answer earlier?
    previouslyAnswered: boolean,
    reviewMode: boolean,
    satStyling?: boolean,
    ...
}> {
    _renderText(): string {
        const {checked, correct, crossedOut} = this.props;
        if (correct) {
            // For correct answers, we surface checked _or_ crossedOut state,
            // because any interaction with the correct answer is noteworthy!
            if (checked) {
                return i18n._("Correct (selected)");
            }
            if (crossedOut) {
                return i18n._("Correct (but you crossed it out)");
            }
            return i18n._("Correct");
        }
        // But, for incorrect answers, we only surface checked state,
        // because crossing out an incorrect answer is not noteworthy.
        if (checked) {
            return i18n._("Incorrect (selected)");
        }
        return i18n._("Incorrect");
    }

    render(): React.Node {
        const {checked, correct, previouslyAnswered, reviewMode, satStyling} =
            this.props;

        // Option status is exclued for SAT
        if (satStyling) {
            return null;
        }

        // Option status is shown only in review mode, or for incorrectly
        // answered items.
        if (!reviewMode && !previouslyAnswered) {
            return null;
        }

        let textStyle;
        if (correct) {
            textStyle = styles.correct;
        } else {
            if (checked || previouslyAnswered) {
                textStyle = styles.incorrectAnswered;
            } else {
                textStyle = styles.incorrect;
            }
        }

        return (
            <div className={css(styles.text, textStyle)}>
                {this._renderText()}
            </div>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        alignItems: "center",
        display: "flex",
        fontSize: 12,
        height: 32,
        textTransform: "uppercase",
    },
    correct: {
        color: Color.green,
    },
    incorrectAnswered: {
        color: Color.red,
    },
    incorrect: {
        color: Color.offBlack64,
    },
});

export default OptionStatus;
