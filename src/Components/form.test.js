import React from 'react';
import {shallow, mount} from 'enzyme'; // for mimicking the behaviour of component getting mounted on dom
import UserForm from './form';

//Wrapper of jest wrapping test function, first arg is description of testcase and second is actual function to run
describe("User Form" ,  () => {
    let userForm = shallow(<UserForm />);   //Mount the UserForm component

    it("renders button", () => {
        expect(userForm.find('.submitButton').text()).toEqual('Submit')
        expect(userForm.find('.resetButton').text()).toEqual('Reset')
    })

    describe("When rendering form", () => {
        it("Form Exists", () => {
            expect(userForm.find("Form").exists()).toBe(true)     //Tests if form is rendered
        })

        it("Rendered form control", () => {
            expect(userForm.find("FormControl").exists()).toBe(true)
        })
    })

    describe("change of values",() => {
        let sampleemail = "name@example.com";
        let samplePassword = "1234";

        beforeEach(() => {
            userForm.find(".emailForm").simulate("change",{     //Simulating the change of state
                target: {value: sampleemail}                    //Setting sample values for state 
            })

            userForm.find(".password").simulate("change",{
                target: {value: samplePassword}
            })

        })

        it("validate email chnage", () => {
            expect(userForm.state().email).toEqual("name@example.com")     //Validating state values, state() can only be called on root, hence called on userForm
        })

        it("validate password change", () => {
            expect(userForm.state().password).toEqual("1234")
        })

        describe("Clicking submit button", () => {
            beforeEach(() => userForm.find(".submitButton").simulate("click"))

            afterEach(() => userForm.find(".resetButton").simulate("click"))   //Removing the effects of beforeEach

            it("Check if submitted", () => {
                expect(userForm.state().submitted).toEqual(true)
            })

            it("Checking email header", () => {
                expect(userForm.find(".emailheader").text()).toEqual("Email - name@example.com")
            })

            it("Checking Password header", () => {
                expect(userForm.find(".passwordheader").text()).toEqual("Fool Password Cannot be displayed!!!!")
            })
        })

        describe("Clicking Reset Button", () => {
            beforeEach(() => {
                userForm.find(".resetButton").simulate("click")
            })

            it("checking if reset", () => {
                expect(userForm.state().submitted).toEqual(false)
            })

            describe("Checking cleared cookies", () => {
                let userForm2;

                beforeEach(() => {
                    userForm2 = mount(<UserForm />)
                })

                it("Validating cleared email", () => {
                    expect(userForm2.state().email).toEqual([])
                })

                it("Validating clearedpassword", () => {
                    expect(userForm2.state().password).toEqual([])
                })
            })
        })

        describe("Validating remember creds check box", () => {
            beforeEach(() => {
                userForm.find(".rememberCheckBox").simulate("click")
                
            })

            describe("Validating Stored Cookie", () => {
                let userForm2;
                beforeEach(() => {
                    userForm2 = mount(<UserForm />)
                })

            it("Validating Stored email", () => {
                expect(userForm2.state().email).toEqual("name@example.com")
            })

        })
    })

})
});