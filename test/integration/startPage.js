const chai = require('chai');
const chaiHttp = require('chai-http');
const cheerio = require('cheerio');

const constants = require('../../app/lib/constants');
const server = require('../../server');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Start page', () => {
  let $;

  before('make request', async () => {
    const res = await chai.request(server).get(`${constants.siteRoot}`);

    $ = cheerio.load(res.text);
  });

  it('page title should be \'Find a chlamydia test - NHS\'', async () => {
    expect($('head title').text()).to.equal('Find a chlamydia test - NHS');
    expect($('.local-header--title--question').text()).to.equal('Find a chlamydia test');
  });

  it('should be indexed', async () => {
    expect($('meta[name=robots]').attr('content')).to.equal(undefined);
  });

  it('should link to the \'Symptoms\' page', async () => {
    const symptomsPage = `${constants.siteRoot}/symptoms`;

    expect($('.start-button').attr('href'))
      .to.equal(symptomsPage);
  });

  describe('return to Choices services', () => {
    it('the breadcrumb should have a link back to the Choices \'Services near you\'', async () => {
      expect($($('.nhsuk-c-breadcrumb__item a')[1]).attr('href'))
        .to.equal('https://www.nhs.uk/service-search');
    });

    it('the page should have a link back to the Choices service search', async () => {
      expect($('.back-to-choices').attr('href'))
        .to.equal('https://www.nhs.uk/service-search');
    });
  });
});
