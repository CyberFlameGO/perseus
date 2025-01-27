// @flow

import "@testing-library/jest-dom";

import {testDependencies} from "../../../../../testing/test-dependencies.js";
import * as Dependencies from "../../dependencies.js";
import {question2} from "../__testdata__/orderer_testdata.js";

import {renderQuestion} from "./renderQuestion.jsx";

import type {APIOptions} from "../../types.js";

describe("orderer widget", () => {
    beforeEach(() => {
        jest.spyOn(Dependencies, "getDependencies").mockReturnValue(
            testDependencies,
        );
    });

    it("should snapshot", () => {
        // Arrange
        const apiOptions: APIOptions = {
            isMobile: false,
        };

        // Act
        const {container} = renderQuestion(question2, apiOptions);

        // Assert
        expect(container).toMatchSnapshot("first render");
    });

    it("should snapshot on mobile", () => {
        // Arrange
        const apiOptions: APIOptions = {
            isMobile: true,
        };

        // Act
        const {container} = renderQuestion(question2, apiOptions);

        // Assert
        expect(container).toMatchSnapshot("first mobile render");
    });

    it("can be answered correctly", () => {
        // Arrange
        const apiOptions: APIOptions = {
            isMobile: false,
        };
        const {renderer} = renderQuestion(question2, apiOptions);
        const [orderer] = renderer.findWidgets("orderer 1");

        // Act
        orderer.setListValues(["1", "2", "3"]);

        // assert
        expect(renderer).toHaveBeenAnsweredCorrectly();
    });

    it("can be answered incorrectly", () => {
        // Arrange
        const apiOptions: APIOptions = {
            isMobile: false,
        };
        const {renderer} = renderQuestion(question2, apiOptions);
        const [orderer] = renderer.findWidgets("orderer 1");

        // Act
        orderer.setListValues(["3", "2", "1"]);

        // assert
        expect(renderer).toHaveBeenAnsweredIncorrectly();
    });
});
