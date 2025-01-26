const Presentation = () => {

  let catalogJSON = JSON.stringify({

    "productCatalog": {
      "products": {
        "FX-001": {
          "basicInfo": {
            "productName": "FX Services",
            "productCategory": "Treasury",
            "status": "active",
            "version": "1.0"
          },
          "bankConfigurations": {
            "BANK001": {
              "isEnabled": true,
              "featureConfigs": {
                "FX-TRADING": {
                  "isEnabled": true,
                  "configuration": {
                    "products": {
                      "spot": {
                        "isEnabled": true,
                        "currencies": {
                          "major": [
                            "USD",
                            "EUR",
                            "GBP",
                            "JPY"
                          ],
                          "emerging": [
                            "CNH",
                            "INR",
                            "BRL"
                          ]
                        },
                        "cutoffTimes": {
                          "major": "17:00 EST",
                          "emerging": "10:00 EST"
                        },
                        "valueDate": {
                          "standard": "T+2",
                          "special": [
                            "T+1",
                            "T+0"
                          ]
                        }
                      },
                      "forward": {
                        "isEnabled": true,
                        "types": [
                          {
                            "name": "Outright Forward",
                            "maxTenor": "2Years",
                            "marginRequirement": "MTM basis"
                          },
                          {
                            "name": "NDF",
                            "currencies": [
                              "CNH",
                              "INR",
                              "BRL"
                            ],
                            "fixingSource": [
                              "REUTERS",
                              "BLOOMBERG"
                            ]
                          }
                        ]
                      },
                      "swaps": {
                        "isEnabled": true,
                        "maxTenor": "2Years",
                        "rollover": true
                      },
                      "options": {
                        "isEnabled": false
                      }
                    },
                    "channels": {
                      "electronic": {
                        "platforms": [
                          "eFX Platform",
                          "API Trading"
                        ],
                        "features": [
                          "RFQ",
                          "Streaming Rates",
                          "Orders"
                        ]
                      },
                      "voice": {
                        "isEnabled": true,
                        "dealers": [
                          "Global",
                          "Regional"
                        ]
                      }
                    }
                  }
                }
              },
              "ruleConfigs": {
                "FX-ELIG-001": {
                  "configuration": {
                    "entityTypes": [
                      "Corporation",
                      "NBFI"
                    ],
                    "tradingPurpose": [
                      "Hedging",
                      "Operational"
                    ],
                    "documentation": {
                      "required": [
                        "ISDA",
                        "FX Trading Agreement",
                        "Dealing Mandate"
                      ],
                      "conditional": [
                        {
                          "document": "CSA",
                          "when": [
                            "forward",
                            "swap",
                            "option"
                          ]
                        }
                      ]
                    },
                    "limits": {
                      "validation": {
                        "settlement": {
                          "type": "Currency",
                          "monitoring": "RealTime"
                        },
                        "credit": {
                          "type": "MTM",
                          "monitoring": "RealTime"
                        }
                      }
                    }
                  }
                }
              },
              "workflowConfigs": {
                "FX-TRADE-WF": {
                  "configuration": {
                    "tradeFlow": {
                      "steps": [
                        {
                          "name": "PreTrade",
                          "checks": [
                            "CreditLimit",
                            "SettlementLimit",
                            "ProductEligibility"
                          ]
                        },
                        {
                          "name": "Execution",
                          "requirements": [
                            "PriceValidation",
                            "LimitChecks",
                            "Confirmation"
                          ]
                        },
                        {
                          "name": "PostTrade",
                          "processes": [
                            "TradeCapture",
                            "Confirmation",
                            "Settlement"
                          ]
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          "baseFeatures": [
            {
              "featureId": "FX-CORE",
              "name": "FX Trading Core",
              "type": "base",
              "capabilities": {
                "trading": {
                  "execution": [
                    "Single Trade",
                    "Batch Upload",
                    "Standing Order"
                  ],
                  "pricing": [
                    "Real-time Rates",
                    "Historical Rates",
                    "Forward Points"
                  ]
                },
                "postTrade": {
                  "confirmation": [
                    "SWIFT",
                    "Email",
                    "Platform"
                  ],
                  "settlement": [
                    "CLS",
                    "Bilateral",
                    "PvP"
                  ]
                }
              }
            }
          ],
          "addOnFeatures": [
            {
              "featureId": "FX-REPORTING",
              "name": "FX Reporting",
              "capabilities": {
                "reports": [
                  {
                    "type": "Trade",
                    "reports": [
                      "TradeBlotter",
                      "PositionReport",
                      "SettlementReport"
                    ]
                  },
                  {
                    "type": "Risk",
                    "reports": [
                      "ExposureReport",
                      "LimitUtilization",
                      "MTMValuation"
                    ]
                  }
                ]
              }
            }
          ],
          "integration": {
            "systems": {
              "treasury": {
                "platforms": [
                  "FIS",
                  "Kyriba",
                  "GTreasury"
                ],
                "features": [
                  "TradeCapture",
                  "PositionUpdate",
                  "Confirmation"
                ]
              },
              "risk": {
                "features": [
                  "LimitMonitoring",
                  "ExposureCalculation",
                  "Reporting"
                ]
              }
            },
            "apis": {
              "trading": [
                "rateRequest",
                "tradeExecution",
                "orderManagement"
              ],
              "postTrade": [
                "tradeStatus",
                "confirmation",
                "settlement"
              ]
            }
          },
          "rules": {
            "expressions": {
              "eligibility": {
                "customer": {
                  "dsl": {
                    "if": {
                      "and": [
                        {
                          "==": [
                            "$.customer.type",
                            "corporate"
                          ]
                        },
                        {
                          ">": [
                            "$.customer.annual_revenue",
                            1000000
                          ]
                        }
                      ]
                    },
                    "then": {
                      "eligible": true
                    }
                  }
                },
                "launch": {
                  "phases": {
                    "soft_launch": {
                      "start": "2025-02-01",
                      "end": "2025-03-01",
                      "markets": [
                        "SG"
                      ],
                      "segments": [
                        "corporate"
                      ],
                      "max_trades": 100
                    },
                    "pilot": {
                      "start": "2025-03-01",
                      "markets": [
                        "SG",
                        "HK"
                      ],
                      "segments": [
                        "corporate",
                        "institutional"
                      ]
                    }
                  }
                }
              },
              "limits": {
                "trading": {
                  "daily": {
                    "max": 5000000
                  },
                  "single": {
                    "max": 1000000
                  }
                },
                "approval": {
                  "levels": [
                    {
                      "threshold": 100000,
                      "approver": "automatic"
                    },
                    {
                      "threshold": 500000,
                      "approver": "dealer"
                    },
                    {
                      "threshold": 1000000,
                      "approver": "head_trader"
                    }
                  ]
                }
              }
            }
          },
          "presentation": {
            "web": {
              "layout": "trading",
              "sections": [
                {
                  "id": "rate_board",
                  "type": "real_time",
                  "pairs": [
                    "EURUSD",
                    "GBPUSD",
                    "USDJPY"
                  ]
                },
                {
                  "id": "trade_ticket",
                  "fields": [
                    {
                      "id": "buy_ccy",
                      "type": "dropdown"
                    },
                    {
                      "id": "sell_ccy",
                      "type": "dropdown"
                    },
                    {
                      "id": "amount",
                      "type": "number"
                    }
                  ]
                }
              ]
            },
            "agentic": {
              "agents": {
                "pricing": {
                  "capabilities": [
                    "rate_streaming",
                    "quote_generation"
                  ],
                  "context": [
                    "market_data",
                    "client_tier",
                    "trade_history"
                  ],
                  "actions": [
                    "provide_quote",
                    "execute_trade"
                  ]
                },
                "risk": {
                  "capabilities": [
                    "limit_check",
                    "exposure_calc"
                  ],
                  "actions": [
                    "approve_trade",
                    "reject_trade"
                  ]
                },
                "orchestrator": {
                  "workflows": {
                    "trading": {
                      "steps": [
                        "quote",
                        "confirm",
                        "execute"
                      ],
                      "decisions": [
                        "risk_check",
                        "limit_check"
                      ]
                    }
                  }
                }
              }
            },
            "api": {
              "paths": {
                "/rates": {
                  "get": {
                    "params": {
                      "pairs": "string[]",
                      "client": "string"
                    }
                  }
                },
                "/trades": {
                  "post": {
                    "input": {
                      "trade": {
                        "buy_ccy": "string",
                        "sell_ccy": "string",
                        "amount": "number"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  }, null, 2); // "2" indicates 2 space indentation 



  return (
    <div className="bg-black p-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Product Engineering Practice</h1>
        <p className="text-xl">Transforming Product Delivery Through Engineering Excellence</p>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Current State</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Deep subject matter expertise in product teams</li>
          <li>Fragmented delivery approaches</li>
          <li>Limited reusability across products</li>
          <li>Long time to market introducing new products and features</li>
        </ul>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Market Challenge</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold mb-2">Current State</h3>
            <ul className="list-disc pl-4">
              <li>6-9 months average product launch time</li>
              <li>4-6 weeks for product changes</li>
              <li>High maintenance overhead</li>
            </ul>
          </div>
          <div className="p-4 border rounded ">
            <h3 className="text-xl font-bold mb-2">Target State</h3>
            <ul className="list-disc pl-4">
              <li>2-3 months product launch time</li>
              <li>1-2 days for product changes</li>
              <li>70% reduction in maintenance</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Product Engineering Vision</h2>
        Adopt core engineering practices into product developmen
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold mb-2">Product Engineering Excellence</h3>
            <ul className="list-disc pl-4">
              <li>Unified Product Catalog</li>
              <li>Standardized Rule Engine</li>
              <li>Multi-experience low code (Web, Headless, Agentic) architecture</li>
              <li>Automated Product Pipeline (aka ‘Helios for Products’)</li>
            </ul>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold mb-2">Product Operations Excellence</h3>
            <ul className="list-disc pl-4">
              <li>Product Lifecycle Management (what/when/where)</li>
              <li>Opportunity Management enablement</li>
              <li>Offer Curation</li>
              <li>Adoption Monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="next buld">
        <h2 className="text-3xl font-bold mb-4">Implementation Roadmap</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold">Phase 1: Foundation (now)</h3>
            <p>Product Catalog, Basic Rule Engine</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold">Phase 2: Multi-product experience (6 months)</h3>
            <p>Unified Payments and Approvals across multiple products (Wires, BT, ACH, FX …)</p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold">Phase 3: Multi-modal experience (9 months)
            </h3>
            <p>Low code, multi-modal (Web, API, Agentic UI, Headless) experiences
            </p>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold">Phase 4: Curation, Sales and Operations Transformation (10 months)

            </h3>
            <p>Opportunity Management to Offer Curation to Enrollment
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Expected Benefits</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold mb-2">Business Impact</h3>
            <ul className="list-disc pl-4">
              <li>50% faster time-to-market</li>
              <li>30% reduction in maintenance costs</li>
              <li>Accelerated Innovation in product and experience offering</li>
            </ul>
          </div>
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold mb-2">Technical Impact</h3>
            <ul className="list-disc pl-4">
              <li>Reusable product components</li>
              <li>Standardized product delivery pipeline</li>
              <li>Reduced product technical debt</li>
            </ul>
          </div>
        </div>
      </div>

      <div>


      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4">Requirements</h2>
        <div className="p-4 border rounded">
          <ul className="list-disc pl-4">
            <li>Product Engineering Team (dedicated software engineers and product owners)</li>
            <li>Prototyping practice (skunkworks) working ahead of the product roadmap </li>
            <li>Product Enfineering CoE integrated with all value streams</li>
            <li>Executive sponsorship</li>



          </ul>
        </div>
      </div>

      <br></br><br></br>



      <div className="p-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Product Engineering Handbook</h1>

        <img src='/product-eng.png'></img>
        <br></br>

        <img src='/catalog.png'></img>
        <br></br>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Architecture</h2>

          <div className="space-y-6">
            <div className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">Product Catalog</h3>
              <pre className=" p-4 rounded">
                {catalogJSON}
              </pre>
            </div>

            <div className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">Rule Types</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">Business Rules</h4>
                  <ul className="list-disc pl-4">
                    <li>Eligibility</li>
                    <li>Approvals</li>
                    <li>Limits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Feature Rules</h4>
                  <ul className="list-disc pl-4">
                    <li>Product Specific Rules</li>
                    <li>Credit Limit Rules</li>
                    <li>Entity Rules</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">Experience Layer</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h4 className="font-bold">Web - auto genenrated</h4>
                  <ul className="list-disc pl-4 text-sm">
                    <li>Components</li>
                    <li>Forms</li>
                    <li>Flows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">API</h4>
                  <ul className="list-disc pl-4 text-sm">
                    <li>REST</li>
                    <li>GraphQL</li>
                    <li>Streams</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Agentic</h4>
                  <ul className="list-disc pl-4 text-sm">
                    <li>Intents</li>
                    <li>Flows</li>
                    <li>AI Agents</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Headless</h4>
                  <ul className="list-disc pl-4 text-sm">
                    <li>ERP</li>
                    <li>Files</li>
                    <li>Streams</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Development</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">Pipeline</h3>
              <div className="space-y-2">
                <div className="p-2 rounded">Catalog: model → test → publish</div>
                <div className="p-2 rounded">Solution: validate → rules → expose</div>
                <div className="p-2 rounded">Deploy: stage → A/B test → prod</div>
              </div>
            </div>
            <div className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">Standards</h3>
              <ul className="list-disc pl-4">
                <li>Product Catalog Semantics</li>
                <li>Product Deployment Strategy</li>
                <li>Product Eligibility and Compliance</li>



              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Operations</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">Monitoring</h3>
              <div className="space-y-2">
                {["Usage", "Performance", "Errors", "Insights"].map(metric => (
                  <div key={metric} className="p-2 rounded">{metric}</div>
                ))}
              </div>
            </div>
            <div className="border rounded p-4">
              <h3 className="text-xl font-bold mb-2">Lifecycle</h3>
              <div className="space-y-2">
                {["Draft", "Review", "Active", "Retired"].map(state => (
                  <div key={state} className="p-2 rounded">{state}</div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      );



    </div >

  );
};

export default Presentation;