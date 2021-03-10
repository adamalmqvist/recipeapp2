import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { request, response } from 'express'
import {describe, it as test} from 'mocha'

import application from "../Server.js"


Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)

const testingNonExistentRoute = () => {
	test('HTTP Call against a route that does not exist in the API', done => {
		Chai.request(application)
			.get(`/${randomString}`)
			.end((request, response) => {
				response.should.have.a.status(404)
				done()
			})
	})
}
const getAllUsers = () => {
	test('Expecting a return of all users in database', done => {
		Chai.request(application)
			.get('/user')
			.end((request, response) => {
				response.should.have.a.status(201)
				response.body.should.be.a('array')
				done()
			})
	})
}



describe("testing the user api entity", () => {
	testingNonExistentRoute(),
	getAllUsers()
})