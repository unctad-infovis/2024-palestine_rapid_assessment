import React, { /* useState, useEffect */ } from 'react';
import '../styles/styles.less';

// Load helpers.
import ChartContainer from './components/ChartContainer.jsx';
import Scroller from './components/Scroller.jsx';
import Buttons from './components/Buttons.jsx';
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2024-palestine_rapid_assessment';

function App() {
  return (
    <div className="app">
      {
        // Banner container
      }
      <div className="cover_container" style={{ paddingBottom: 0 }}>
        <div className="content_container">
          <h3 className="subtitle upper">Preliminary Assessment Of The</h3>
          <h2 className="title">Economic Impact Of The Destruction Of Gaza</h2>
          <h3 className="subtitle lower">And Prospects For Economic Recovery</h3>
          <h4>Unctad Rapid Assesment</h4>
          <h4 className="date">January 2024</h4>
        </div>
        <img src={`${window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2024-palestine_rapid_assessment' : '.'}/assets/img/2024-palestine_rapid_assessment_world-min.png`} alt="" />
        <div className="cover_bottom">
          <div className="flex">
            <div className="unctad_logo_container">
              <img src="https://unctad.org/sites/default/files/2022-11/unctad_logo_white.svg" alt="UNCTAD logo" />
            </div>
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0" />
              <path className="a2" d="M0 20 L30 52 L60 20" />
              <path className="a3" d="M0 40 L30 72 L60 40" />
            </svg>
            <div className="content_container">
              <p>The designations employed and the presentation of material on the maps do not imply the expression of any opinion whatsoever on the part of the Secretariat of the United Nations concerning the legal status of any country, territory, city or area or of its authorities, or concerning the delimitation of its frontiers or boundaries.</p>
              <p>UNCTAD gratefully acknowledges the contributions of Jean-Louis Arcand, President of the Global Development Network and Daniele Rinaldo, Assistant Professor, Department of Economics, University of Exeter, United Kingdom of Great Britain and Northern Ireland.</p>
            </div>
            <div className="button_container"><a href="#anchor_download" className="button">Download the report in PDF</a></div>
          </div>
        </div>
      </div>
      {
      // Section 1 container
      }
      <div>
        <div className="section_banner_container section_banner_container_1">
          <div className="section_banner"><div className="number">1</div></div>
          <div className="heading_wrapper"><h3>Introduction</h3></div>
        </div>
        <div className="content_container">
          <h4>Context and background prior to October 2023</h4>
          <p>Israel has occupied Gaza and the West Bank, including East Jerusalem, since June 1967. Despite the “withdrawal” of Israel from Gaza in 2005, it has retained control over its airspace and all land and sea borders, except for the 12 km border with Egypt.</p>
          <p>Since the early 1990s, and greatly amplified after 2007, the Palestinian people in Gaza have been subjected to prolonged and severe restrictions on their movement that, in combination with tight restrictions on trade in goods, in effect amount to a blockade on the densely populated 365 km² Gaza Strip. Furthermore, Israel does not allow the construction and operation of air or seaports and bans or restricts the importation of critical production inputs and technology.</p>
        </div>
        <div className="chart_container">
          <div className="chart">
            <h4>The development challenges of Gaza: 2.3 million Palestinians locked in a small area, no way in or out</h4>
            <img src={`${window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2024-palestine_rapid_assessment' : '.'}/assets/img/2024-palestine_rapid_assessment_gaza_map.png`} alt="" />
            <h6>
              <em>Source:</em>
              {' '}
              <span>Office for the Coordination of Humanitarian Affairs (OCHA) Occupied Palestinian Territory.</span>
            </h6>
          </div>
        </div>
        <div className="content_container">
          <p>Several Israeli military operations have taken place in Gaza, in 2008, 2012, 2014, 2021, 2022, May 2023 and October 2023. The operations caused internal displacement and recurrent destruction of physical infrastructure, residential buildings, capital stock and productive assets, including agricultural land, crops, livestock sheds, greenhouses, fruit trees, storage facilities, boats, fishing equipment, agribusinesses, irrigation canals, water pumping systems, electricity networks, Internet networks, factories, office buildings, housing units, educational facilities and health-care centres.</p>
          <p>Prior to the outbreak of the latest Israeli military operation in October 2023, much of the damage from previous military operations remained unrepaired, while the inhabitants of Gaza were confined in one of the most densely populated spaces in the world, in chronic conflict conditions, with inadequate access to clean water, without electricity for half the day and without a proper sewage system. Close to half the workforce was unemployed and two thirds of the population lived in poverty.</p>
          <p>
            Key economic indicators before and after the blockade show aspects of the de-development of Gaza. At the time of the establishment of the Palestinian National Authority in 1994, Gaza had about the same standards of living as the West Bank. The ratio of Gaza’s GDP per capita to that of the West Bank fell from parity in 1994 to 44 per cent in 2007 and reached 28 per cent in 2022.
            <sup title="UNCTAD (2023). Report on UNCTAD assistance to the Palestinian people: Developments in the economy of the Occupied Palestinian Territory, pp. 10–11. TD/B/EX(74)/2. 11 September. Geneva.">1</sup>
          </p>
          <p>During the period 2006–2022, the GDP per capita of Gaza shrank by 27 per cent, from $1,994 in 2006 to $1,257 in 2022.</p>
          <p>
            According to the International Monetary Fund the military operation of 2014 debilitated 85 per cent of the capital stock that had survived the previous military operations.
            <sup title="International Monetary Fund (2017). West Bank and Gaza: report to the Ad Hoc Liaison Committee.">2</sup>
          </p>
          <p>For over a decade and a half Gaza has been largely removed from the development agenda and has been rendered a humanitarian disaster area with 80 per cent of the population dependent on international aid.</p>
          <h4>The ongoing Israeli military operation in Gaza: unprecedented devastation</h4>
          <p>The current Israeli operation in Gaza has resulted in an unprecedented death toll, destruction of civilian infrastructure and mass displacement of Gazans from the northern to the southern part of the enclave. This, de facto, has doubled the already extremely high population density under conditions of extensively damaged water, sanitation and hygiene system, which may elevate public health risks to dangerous levels.</p>
          <p>
            By 28 January 2024, more than three months into the military operation, the reported death toll in Gaza reached 26,422, the majority of whom are children and women. At least 65,087 people have been injured and many have been reported missing in Gaza, likely trapped or dead under the rubble.
            <sup title="OCHA Occupied Palestinian Territory (2024). Hostilities in the Gaza Strip and Israel | Flash Update #104.">3</sup>
          </p>
          <p className="highlight">The reported death toll currently stands at more than four times the combined toll of all past Israeli military operations since 2007. And the loss of life continues.</p>
          <p>More than three months into the military operation, an estimated 1.9 million people, or nearly 85 per cent of the population of Gaza, became internally displaced, following evacuation orders by the Government of Israel.</p>
          <p>
            Nearly 1.72 million of these internally displaced persons were registered in severely overcrowded facilities of the United Nations Relief and Works Agency for Palestine Refugees in the Near East (UNRWA), while the rest took shelter in schools, hospitals, wedding halls, offices and community centres, and some camped in open space near shelters.
            <sup title="OCHA Occupied Palestinian Territory (2024). Hostilities in the Gaza Strip and Israel | Flash Update #104.">4</sup>
          </p>
        </div>
        <div className="img_container">
          <img src={`${window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2024-palestine_rapid_assessment' : '.'}/assets/img/2024-palestine_rapid_assessment_photo1-min.jpg`} alt="" />
        </div>
        <div className="content_container">
          <p>
            According to the United Nations Satellite Centre (UNOSAT), from 7 October to 26 November, the Israeli bombardment damaged 37,379 buildings, or 18 per cent of the total structures in Gaza.
            <sup title="UNOSAT (2023). Gaza Strip Comprehensive Damage Assessment - 26 November 2023">5</sup>
            {' '}
            In 2014, 51 days of bombardment, damaged 22,737 structures.
            <sup title="UNOSAT (2014). Density of Damage Assessment in Gaza Strip, Occupied Palestinian Territory.">6</sup>
          </p>
          <p>
            The number of children reportedly killed in a little over the first three weeks of bombing in Gaza has exceeded the combined total number of children killed in armed conflicts in more than 22 countries since 2019.
            <sup title="See https://www.savethechildren.net/news/gaza-3195-children-killed-three-weeks-surpasses-annual-number-children-killed-conflict-zones">7</sup>
          </p>
          <p>
            On 8 December 2023, the United Nations Secretary-General invoked article 99 of the Charter of the United Nations in his letter to the Security Council “because we are at a breaking point. There is a high risk of the total collapse of the humanitarian support system in Gaza, which would have devastating consequences. We anticipate that it would result in a complete breakdown of public order and increased pressure for mass displacement into Egypt. I fear the consequences could be devastating for the security of the entire region”.
            <sup title="See https://www.un.org/sg/en/content/sg/statement/2023-12-08/secretary-generals-remarks-the-security-council-the-situation-the-middle-east-including-the-palestinian-question-bilingual-delivered-scroll-down-for-all-english">8</sup>
          </p>
          <p>
            Meanwhile, in the West Bank, including East Jerusalem, by 28 January 2024, 362 Palestinians were killed and 4,366 injured. The 507 Palestinians killed in the West Bank, including East Jerusalem, in 2023 marked the highest number of Palestinians killed in the West Bank since OCHA started recording casualties in 2005.
            <sup title="OCHA Occupied Palestinian Territory (2024). Hostilities in the Gaza Strip and Israel | Flash Update #104.">9</sup>
          </p>
        </div>
      </div>
      {
      // Section 2 container
      }
      <div>
        <div className="section_banner_container section_banner_container_2">
          <div className="section_banner"><div className="number">2</div></div>
          <div className="heading_wrapper"><h3>The economic impact of the ongoing Israeli military operation will last for decades</h3></div>
        </div>
        <div className="content_container">
          <p>UNCTAD evaluates the impact of the Israeli military operation on Gaza by focusing on four key factors: the loss in GDP, the time horizon for recovery, the direct impact on economic activities due to damages and medium-term effects on poverty and household expenditure. While the military operation continues, its consequences can be estimated by recourse to historical economic data and trends.</p>
          <h4>The economy of Gaza in 2023</h4>
          <p>The latest data available indicate that, during the first half of 2023, the GDP of Gaza contracted by 4.5 per cent. To estimate GDP for the whole year, it was assumed that the trend for the first half of the year extended to the third quarter. However, to capture the additional impact of the military operation during the fourth quarter, it was assumed that the impact was similar to the quarterly GDP loss during the Israeli military operation of 2014 (38 per cent), adjusting for the duration and severity of the military operation. It is estimated that, in 2023, the annual GDP of Gaza declined by $655 million (in constant 2015 dollars), equivalent to 24 per cent of GDP, with a slightly higher contraction (26.1 per cent) in GDP per capita which now stands at just a little over a third of its peak in 2005.</p>
          <p>By the end of the third quarter of 2023, unemployment in Gaza was 45.1 per cent. The International Labour Organization (ILO) estimated that 61 per cent of employment has been lost compared to pre-conflict levels, equating to 182,000 jobs. By December 2023, unemployment reached 79.3 per cent.</p>
        </div>
        <div className="chart_container">
          <ChartContainer chart_id="zF81P" />
        </div>
        <div className="chart_container">
          <ChartContainer chart_id="Db8hI" />
        </div>
        <div className="chart_container">
          <ChartContainer chart_id="7g4UF" />
        </div>
        <div className="chart_container">
          <ChartContainer chart_id="vOKzT" />
        </div>
        <div className="img_container">
          <img src={`${window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2024-palestine_rapid_assessment' : '.'}/assets/img/2024-palestine_rapid_assessment_photo2-min.jpg`} alt="" />
        </div>
        <div className="content_container">
          <h4>The immediate impact of bombardment on economic activity and household welfare</h4>
          <p>
            A reliable indicator for estimating the immediate impact of the Israeli military operation on economic activity and household welfare in the Gaza Strip, given that no official data are available, is to use satellite images of the damages, combined with nighttime lights (NTL). NTL have been widely used as a measure of economic development and is available on a daily basis. Researchers have shown that the Black Marble VIIRS night lights measurements are accurate proxies for economic activity, especially for highly disaggregated spatial units.
            <sup title="Chen, X. and W. D. Nordhaus (2011). Using luminosity data as a proxy for economic statistics. Proceedings of the National Academy of Sciences. 108(21):8589–8594.; Gibson, J., S. Olivia, and G. Boe-Gibson (2020). Night lights in economics: Sources and uses 1. Journal of Economic Surveys. 34(5):955–980; Gibson, J., S. Olivia, G. Boe-Gibson and C. Li (2021). Which night lights data should we use in economics, and where? Journal of Development Economics 149:102602.">10</sup>
          </p>
        </div>
        <div className="chart_container scroller">
          <Scroller
            captions={[{ text: 'The first wave of bombing concentrated in the northern parts of Gaza including Gaza city', date: '6 October – 22 November', date_title: 'The first 6 weeks' }, { text: 'During the ceasefire the amount damage was limited', date: '23 November – 29 November', date_title: 'The cease fire' }, { text: 'The second wave of bombing extended from northern parts of Gaza to Khan Younis in the south', date: '7 October – 28 December', date_title: 'Overall' }]}
            image="2024-palestine_rapid_assessment_damage"
            images={['2024-palestine_rapid_assessment_damage_40x40_0', '2024-palestine_rapid_assessment_damage_40x40_1', '2024-palestine_rapid_assessment_damage_40x40_2']}
            note="Each red pixel represents a 40m × 40m area that has been bombed within the time period of the map."
            source="Each red pixel represents a 40m × 40m area that has been bombed within the time period of the map. A value of 0 represents no detectable damage, while a value of 1 represents likely damage in human settlements (cities, towns, villages)."
            subtitle={['Original damage maps. 7 October – 22 November 2023.', 'Original damage maps. 23 November – 29 November 2023.', 'Original damage maps. 6 October – 28 December 2023']}
            title="The unprecedented level of destruction in the Gaza Strip rendering it uninhabitable"
          />
        </div>
        <div className="content_container">
          <p>To estimate the immediate impact of the damage caused by the Israeli military operation on economic activity and household welfare, proxied by NTL, a panel of 365 grid cells of 1 km² was constructed for the whole of the Gaza Strip. Each cell was observed from 5 October to 28 December 2023.</p>
          <p>The three maps below show damage to the Gaza Strip in comparison to before 7 October (zero damage). The first map shows the damage up to 22 November. The map in the middle shows the damage between 23 November and 29 November. The last map shows the damage up to 28 December.</p>
        </div>
        <div className="chart_container scroller">
          <Scroller
            captions={[{ text: 'The first wave of bombing concentrated in the northern parts of Gaza including Gaza city', date: '7 October – 22 November', date_title: 'The first 6 weeks' }, { text: 'During the ceasefire the amount damage was limited', date: '23 November – 29 November', date_title: 'The cease fire' }, { text: 'The second wave of bombing extended from northern parts of Gaza to Khan Younis in the south', date: '7 October – 28 December', date_title: 'Overall' }]}
            image="2024-palestine_rapid_assessment_damage"
            images={['2024-palestine_rapid_assessment_damage_1x1_0', '2024-palestine_rapid_assessment_damage_1x1_1', '2024-palestine_rapid_assessment_damage_1x1_2']}
            legend="damage"
            note="The period between November 23rd and 29th includes the ceasefire. Each grid cell aggregates 625 of the 40m × 40m grid cell available in the damages data. The associated measurement represents the number of bombed 40m x 40m cells within each 1 km² grid. Up to 28 December, the average number of bombed cells is 136 per km² (21.7 per cent of each grid surface). The 1 km² grid cell with the highest number of bombed 40m x 40m cells is in Beit Lahiya, with 624 cells bombed out of 625 (99.8 per cent of its grid surface)."
            source="UNCTAD calculations based on the Damage Analysis of Copernicus Sentinel-1 satellite data by Corey Scher of CUNY Graduate Center and Jamon Van Den Hoek of Oregon State University."
            subtitle={['Damage intensity grids of 1km². 7 October – 22 November 2023', 'Damage intensity grids of 1km². 23 November – 29 November 2023', 'Damage intensity grids of 1km². 7 October – 28 December 2023']}
            title="Some areas in Gaza have been completely destroyed by the Israeli military operation"
          />
        </div>
        <div className="img_container">
          <img src={`${window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2024-palestine_rapid_assessment/assets/img/' : './assets/img/'}2024-palestine_rapid_assessment_photo3-min.jpg`} alt="" />
        </div>
        <div className="content_container">
          <p>The four maps below show NTL in the Gaza Strip to illustrate the damage to economic activity. The first map shows the average NTL for the nights between 22 September and 6 October (before the military operation). The second map shows the NTL on the night of 22 to 23 November (at the end of the first period of the data on damages). The third map shows the NTL on the night between 29 and 30 November (at the end of the ceasefire). The fourth map shows the NTL on the night between 28 and 29 December.</p>
        </div>
        <div className="chart_container scroller">
          <Scroller
            captions={[{ text: 'Before the operation Gaza city, Khan Younis and Rafah were the most luminous', date: '22 September – 6 October', date_title: 'Average before the war' }, { text: 'Especially Gaza City looses in the north looses luminosity during the first weeks', date: '22 November – 23 November', date_title: 'Night before the cease fire' }, { text: 'By the end of the ceasefire Khan Youinis and Rafah became most luminous as people displaced moved further to the south', date: '29 November – 30 November', date_title: 'Last night of the cease fire' }, { text: 'By the end of the second wave of Israeli bombing concentrated in Khan Younis, Rafah was the most luminous in the Gaza strip ', date: 'Night of 28 December – 29 December' }]}
            image="2024-palestine_rapid_assessment_damage"
            images={['2024-palestine_rapid_assessment_ntl_1x1_0', '2024-palestine_rapid_assessment_ntl_1x1_1', '2024-palestine_rapid_assessment_ntl_1x1_2', '2024-palestine_rapid_assessment_ntl_1x1_3']}
            legend="ntl"
            note="NTL at different days during the Israeli military operation. The measurement used is at-sensor day/night boundary radiance during the night of each respective day, expressed in watt per steradian per square centimetre, aggregated at a 500 x 500 m level. Each grid cell is a 1 km² area which represents the average of the four 500m × 500m sensor measurements of at-sensor day/night boundary radiance during the night of each respective day."
            source="UNCTAD calculations based on the Black Marble NASA project, specifically the VNP46A1 VIIRS/NPP Daily Gridded Day Night Band Linear Lat Lon Grid Night product suite (data publicly available at https://ladsweb.modaps.eosdis.nasa.gov)."
            subtitle={['Night time luminosity (NTL) at different days during the Israeli military operation. Daily average 22 September – 6 October 2023', 'Night time luminosity (NTL) at different days during the Israeli military operation. Night of 22 November – 23 November 2023', 'Night time luminosity (NTL) at different days during the Israeli military operation. Night of 29 November – 30 November 2023', 'Night time luminosity (NTL) at different days during the Israeli military operation. Night of 28 December – 29 December 2023']}
            title="Darkness engulfed Gaza as destruction continued and economic activity across all sectors ground to a halt"
          />
        </div>
        <div className="content_container">
          <p>The impact of Israeli military operation on NTL (and therefore on household welfare) is estimated by comparing the average change in NTL in grid cells that were bombed with the change in NTL in grid cells that were not. The pre-military-operation NTL average of the daily measurements between 22 September and 6 October is used for comparing the estimates. The first round of bombing between 7 October and 22 November reduced NTL by 16.3 to 19.6 per cent. The cumulative effect of bombing between 7 October and 30 November, which includes both the first round of bombing, and the ceasefire is a reduction in NTL of 10.3–15.9 per cent.</p>
          <p className="highlight">The difference between the two estimates suggests that the ceasefire allowed NTL to recover by between 4 and 5 per cent. The cumulative effect of the Israeli military operation between 7 October and 28 December 2023 caused a reduction of NTL of between 31.1 and 36.5 per cent.</p>
          <p>Also considered is the impact of the intensity of damage on NTL: a 1 per cent increase in damage intensity (i.e. a 1 per cent increase in the number of 40m x 40m cells bombed in each square kilometre grid cell), on average, is associated with a 6.2 per cent loss in NTL. The grid cells that suffered the highest level of damage experienced a loss of NTL in excess of 50 per cent.</p>
          <p>In terms of household welfare, UNCTAD has previously estimated the elasticity of total household expenditures with respect to NTL, at the locality level, to be equal to 1.18. The NTL-based estimates therefore imply that household expenditure in Gaza was reduced by 19.2 to 23.1 per cent during the first phase of the Israeli operation. Once the ceasefire is taken into account, the fall in household expenditures between 7 October and 30 November 2023 is estimated to be in the range of 12.2–18.8 per cent. As of 28 December 2023, the fall in household expenditure is estimated to be between 36.6 and 43.1 per cent.</p>
          <p>
            <strong>Horizon and prospects for the recovery of Gaza</strong>
            <br />
            The possibility and speed recovery of Gaza depends on the date of ending of the military operation and subsequent growth performance – both remain unknown.
          </p>
          <p>For illustration, assuming that the military operation ends immediately, reconstruction starts straight away and GDP growth picks up 10 per cent on average annually, with an annual population growth of 2.8 per cent, the GDP per capita of Gaza will return to its 2022 level by 2028 and to its 2006 levels in 2035, and may return to its 1994 level by 2037.</p>
          <p>However, it is important to note that the return of GDP per capita to pre-October 2023 levels does not mean restoration of well-being because GDP and GDP per capita recovery, difficult and lengthy as they may be, do not account for damaged assets and the cost of replacing them. Taking into account the cost of replacing destroyed assets, in an optimistic scenario of double-digit growth rates facilitated by a large injection of foreign aid, it will take decades for Gaza to return to pre-October 2023 welfare levels.</p>
          <p>
            Sustaining a robust growth rate over the years requires a continuous influx of both public and private investments. However, it is crucial to highlight the significance of strengthening governance and institutions. The international community should play a pivotal role in this endeavour by extending essential financial support to the Palestinian Government, thereby reversing the declining trends in aid and reinstating aid levels to those seen in 2008.
            <sup title="Foreign aid declined from a total of $2 billion, or 27 per cent of GDP, in 2008, to $550 million, or less than 3 per cent of GDP, in 2022. UNCTAD, (2023). Report on UNCTAD assistance to the Palestinian people Developments in the economy of the Occupied Palestinian Territory. TD/B/EX(74)/2.">11</sup>
            {' '}
            Ideally, the initial phase should involve substantial infusion of public investment to rebuild vital institutions and infrastructure to underpin and foster economic recovery and instil confidence. This, in turn, would pave the way for the private sector and foreign direct investment to assume a prominent role in economic recovery.
            <sup title="Investment in 2006 share of the GDP of Gaza was 30 per cent; this level needs to be restored and improved in the coming years. UNCTAD, (2023). Report on UNCTAD assistance to the Palestinian people Developments in the economy of the Occupied Palestinian Territory. TD/B/EX(74)/2.">12</sup>
          </p>
          <p>However, if the 2007–2022 growth trend persists with an average growth rate of 0.4 per cent, it will take Gaza 70 years just to restore the GDP levels of 2022 with GDP per capita continuously and precipitously declining given the population growth rate.</p>
        </div>
        <div className="chart_container">
          <ChartContainer chart_id="2xm13" />
        </div>
        <div className="content_container">
          <h4>The medium-term effects of the military operation on poverty and household expenditure</h4>
          <p>
            The medium-term welfare impact of the current Israeli military operation can be estimated with reference to the impact of the 2014 operation on poverty and household expenditure. It is therefore assumed that the ongoing military operation impacts poverty and expenditure through similar channels and mechanisms.
            <sup title="While the level of damages and destruction of the current military operation is unprecedented, the 51-day Israeli military operation in Gaza in 2014 is the closest in terms of scale and damages to the current military operation.">13</sup>
          </p>
          <p>
            UNCTAD estimates that, during the 2014 Israeli military operation, a 1 per cent increase in the intensity of bombardment – measured by damaged structures per square kilometre – is associated with a 6.2 per cent reduction in expenditure per adult equivalent and a 6.3 per cent increase in the poverty rate. These coefficients can be applied to the current damage intensity per km² observed by UNOSAT for the current military operation.
            <sup title="To assess damage in the Gaza Strip, UNOSAT reviewed high-resolution satellite imagery using WorldView2 satellite with a resolution 50 cm.">14</sup>
          </p>
          <p>UNOSAT released three damage assessments for the periods 7–15 October, 7 October – 7 November and 7 October – 26 November 2023. UNOSAT data show a dramatic increase in damage intensity: By 15 October, 10,548 buildings were damaged, by 7 November, the number of damaged buildings rose to 25,050 and by 26 November, that number reached 37,379 buildings, equivalent to 18 per cent of the total structures of the Gaza Strip.</p>
          <p>Between 15 October and 26 November 2023, the number of damaged buildings increased by approximately 355 per cent. The map below shows the damage intensity per km² for the three periods.</p>
        </div>
        <div className="chart_container">
          <div className="chart">
            <h4>Damage intensity per km² in Gaza localities between three assessments</h4>
            <div className="charts_container charts_container_1">
              <Buttons group="1" />
              <div className="chart_wrapper chart_wrapper_0 hidden">
                <ChartContainer chart_id="HSw0d" />
              </div>
              <div className="chart_wrapper chart_wrapper_1 hidden">
                <ChartContainer chart_id="ztGcp" />
              </div>
              <div className="chart_wrapper chart_wrapper_2">
                <ChartContainer chart_id="mCkbP" />
              </div>
            </div>
          </div>
        </div>
        <div className="img_container">
          <img src={`${window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2024-palestine_rapid_assessment/assets/img/' : './assets/img/'}2024-palestine_rapid_assessment_photo4-min.jpg`} alt="" />
        </div>
        <div className="content_container">
          <p>While the immediate impact of the military operation on household welfare is estimated to be between 16.3 and 19.3 per cent; the medium-term impact will be greater if recovery and reconstruction proceed at the post 2014 military operation pace. UNCTAD estimates that if the military operation had ended on 15 October 2023, by 2026, expenditure per adult equivalent will be 17.6 per cent lower than the pre-crisis level, 24.5 per cent lower if the operation had ended by 7 November 2023 and 37.1 per cent lower if the operation had ended by 26 November 2023. By the same reasoning, UNCTAD estimates that, by 2026, poverty rates will be 17.8 per cent, 24.8 per cent and 37.7 per cent higher had the military operation been concluded by the aforementioned dates. The longer the operation persists, the greater the impact will be.</p>
        </div>
        <div className="chart_container">
          <div className="chart">
            <h4>In the medium term, if the status quo ante prevails, further loss of income awaits the people of Gaza</h4>
            <div className="charts_container charts_container_0">
              <Buttons group="0" />
              <div className="chart_wrapper chart_wrapper_0 hidden">
                <ChartContainer chart_id="9FDOg" />
              </div>
              <div className="chart_wrapper chart_wrapper_1 hidden">
                <ChartContainer chart_id="jFSb4" />
              </div>
              <div className="chart_wrapper chart_wrapper_2">
                <ChartContainer chart_id="RUDk6" />
              </div>
            </div>
          </div>
        </div>
        <div className="chart_container">
          <div className="chart">
            <h4>In the medium term a return to the status quo will entrench and deepen poverty</h4>
            <div className="charts_container charts_container_2">
              <Buttons group="2" />
              <div className="chart_wrapper chart_wrapper_0 hidden">
                <ChartContainer chart_id="HZJzp" />
              </div>
              <div className="chart_wrapper chart_wrapper_1 hidden">
                <ChartContainer chart_id="Jf5dZ" />
              </div>
              <div className="chart_wrapper chart_wrapper_2">
                <ChartContainer chart_id="5GltN" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {
      // Section 3 container
      }
      <div>
        <div className="section_banner_container section_banner_container_3">
          <div className="section_banner"><div className="number">3</div></div>
          <div className="heading_wrapper"><h3>Concluding remarks and recommendation</h3></div>
        </div>
        <div className="content_container">
          <p>
            <strong>Since 7 October 2023, Gaza has been suffering under an unprecedented scale of death and destruction.</strong>
            {' '}
            The massive blow represents a huge dent to the already precarious living conditions in the Gaza Strip.
          </p>
          <p>
            <strong>As a result of the military operation, economic activity across all productive sectors in Gaza ground to a halt,</strong>
            {' '}
            except for minimum health and food services provided under conditions of severe water, fuel and electricity shortages.
            {' '}
            <strong>UNCTAD early estimates show precipitous declines in living conditions, declining GDP per capita, soaring poverty and unemployment, among other socioeconomic challenges.</strong>
          </p>
          <p>
            <strong>The Gaza Strip, with its small area and a rapidly expanding population, faces significant developmental challenges, exacerbated by the fact that half of its people are children. The level of destruction from the latest Israeli military operation rendered it uninhabitable. The devastation of civilian infrastructures, including health facilities, underscores the impossibility of the recovery and development of Gaza</strong>
            {' '}
            without serious and speedy efforts by the international community to restore peace and secure the high levels of funding required to bring a semblance of socioeconomic normality back to the devastated Strip.
          </p>
          <p><strong>Monetary poverty has widened and deepened engulfing the entire population of Gaza. Multidimensional poverty is even worse because it takes into account deprivation of education, and basic infrastructure services to capture a more realistic picture of poverty. Living conditions in Gaza are at their lowest since occupation began in 1967 and will worsen even more unless the military operation stops.</strong></p>
          <p>
            <strong>If Gaza is to remerge with a viable economy, the military confrontation should end immediately, and reconstruction should begin in earnest and without delay. The international community needs to act now before it is too late.</strong>
            {' '}
            A lasting ceasefire is needed now to allow sufficient and adequate humanitarian aid to enter Gaza. Reconstruction and recovery need to start now to put Gaza back on a sustainable development path.
          </p>
          <p>
            <strong>The future of the Palestinian people will be largely determined by the actions of the Government of Israel, donors and the international community.</strong>
            {' '}
            A new phase of economic rehabilitation predicated on peacebuilding cannot simply take as its goal a return to the pre-October 2023 status quo.
            {' '}
            <strong>Only by ending the military confrontation and fully lifting the blockade of Gaza can there be hope to resolve sustainably the political, socioeconomic and humanitarian crisis engulfing Gaza.</strong>
          </p>
          <p>Ending the conflict and lifting the blockade on Gaza are the necessary first steps towards the ultimate goal of achieving the two-state solution, in line with international law and relevant United Nations resolutions, along the 1967 borders, with the Gaza Strip constituting an integral part of the territory occupied in 1967.</p>
          <p>
            <strong>The restoration of infrastructure and essential services, such as education and health care, is crucial for containing and reversing the long-term consequences of the military operation on key development indicators, including mortality rates, the school year loss due to disrupted education and the toll on mental health and general well-being. There is an obvious and urgent need for large-scope recovery programmes that prioritize rebuilding infrastructure, especially in such vitalpublic goods as education and health.</strong>
            {' '}
            Restoring essential physical infrastructure of Gaza and the provision of vital public goods are essential steps to mitigate the adverse effects of the military operation to ultimately minimize the loss of jobs, future income and welfare in Gaza.
            {' '}
            <strong>Promoting development and unleashing the capacity of the economy of Gaza for job creation is essential for restoring dignity and ending decades of forced dependency on humanitarian assistance.</strong>
          </p>
          <p>There is a need for convening an international recovery and reconstruction conference where donors can make credible commitments and pledges to contribute to a fund for the reconstruction of Gaza, financing humanitarian relief and extending significant budget support to the Palestinian Government.</p>
          <p><strong>At the moment, it is difficult to establish the scale of foreign aid required to bring Gaza back to the level of socioeconomic conditions that prevailed prior to the outbreak of the current confrontation, let alone a modicum of normality consistent with achieving the wider development ambitions enshrined in the Sustainable Development Goals, but there is no doubt that it will amount to several tens of billions of dollars by any conservative estimation. However, donors and the international community should realize that the constraints on the Palestinian economy in general, and Gaza in particular, are not just the results of recent confrontation but are rooted in a prolonged 56-year occupation.</strong></p>
          <p>Ending the military operation is an essential condition for reviving the economy of Gaza but it is far from sufficient. Reconstruction of Gaza, and indeed the whole Palestinian economy, requires lifting the blockade to allow Gaza to integrate with the West Bank and with regional markets, coupled with substantial injection of foreign aid for the rebuilding of crucial infrastructure to bring about a genuine structural transformation. Recovery efforts should prioritize addressing the aforementioned long-standing constraints that held back Palestinian socioeconomic development.</p>
        </div>
        <div className="img_container">
          <img src={`${window.location.href.includes('unctad.org') ? 'https://storage.unctad.org/2024-palestine_rapid_assessment/assets/img/' : './assets/img/'}2024-palestine_rapid_assessment_photo5-min.jpg`} alt="" />
        </div>
        <div className="content_container">
          <p>
            <strong>While there is an urgent need to fund humanitarian relief and rebuild the shattered infrastructure of Gaza, the importance of providing the Palestinian Government with immediate and robust budget support cannot be overstated. The scale of budget support should be sufficient to ensure that the Palestinian Government averts collapse leading to the spread of large-scale chaos.</strong>
            {' '}
            Fiscal sustainability needs to be supported by donors to enable the Government to maintain the limited, but still important, degree of governance it has been providing, deliver essential public services and sustain aggregate demand by paying the salaries of public employees and clearing its arrears to the private sector.
          </p>
          <p>
            <strong>More serious efforts will be needed to achieve the reunification of Gaza with the occupied West Bank; politically, administratively, fiscally, economically and socially under a single national government.</strong>
            {' '}
            Gaza is and should remain an integral part of a future Palestinian State, as part of a viable two-state solution. The international community should play a key role in facilitating the long overdue reunification by providing sustained political, technical and financial support.
          </p>
          <p>
            Envisaged reunification should be complemented by enabling the Palestinian Government to unlock its growth potential by restoring the Gaza International Airport, which was opened in 1998 but was bombed by the occupying Power, in the aftermath of the Second Intifada, in 2001 and 2002, rendering it inoperable. This should be accompanied by building a seaport and enabling the Palestinian Government to develop the natural gas fields discovered in the 1990s in the Mediterranean Sea off the shore of Gaza to help finance the reconstruction of infrastructure, private and public structures and rebuild the productive base of Gaza as elaborated by UNCTAD.
            <sup title="UNCTAD (2019). The Economic Costs of the Israeli Occupation for the Palestinian People: The Unrealized Oil and Natural Gas Potential. Available at https://unctad.org/system/files/official-document/gdsapp2019d1_en.pdf">15</sup>
          </p>
          <p><strong>Piecemeal, precarious and reversible measures cannot be a substitute for lifting the blockade on Gaza to allow its economy to recover, operate and trade normally and freely with the West Bank, East Jerusalem and the rest of the world. The vicious circle of destruction and partial reconstruction needs to be broken by negotiating a peaceful solution, based on international law and relevant United Nations and Security Council resolutions.</strong></p>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
