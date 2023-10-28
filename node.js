	
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "cli": {
    "defaultCollection": "@angular-eslint/schematics"
  },
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "stream-chat-angular": {
      "projectType": "library",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss",
          "inlineStyle": true,
          "export": true
        }
      },
      "root": "projects/stream-chat-angular",
      "sourceRoot": "projects/stream-chat-angular/src",
      "prefix": "stream",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:ng-packagr",
          "options": {
            "project": "projects/stream-chat-angular/ng-package.json"
          },
          "configurations": {
            "production": {
              "tsConfig": "projects/stream-chat-angular/tsconfig.lib.prod.json"
            },
            "development": {
              "tsConfig": "projects/stream-chat-angular/tsconfig.lib.json"
            }
          },
          "defaultConfiguration": "production"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "projects/stream-chat-angular/src/test.ts",
            "tsConfig": "projects/stream-chat-angular/tsconfig.spec.json",
            "karmaConfig": "projects/stream-chat-angular/karma.conf.js"
          }
        },
        "lint": {
          "builder": "@angular-eslint/builder:lint",
          "options": {
            "lintFilePatterns": [
              "projects/stream-chat-angular/**/*.ts",
              "projects/stream-chat-angular/**/*.html"
            ]
          }
        }
      }
    },
    "sample-app": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss",
          "skipTests": true
        },
        "@schematics/angular:class": {
          "skipTests": true
        },
        "@schematics/angular:directive": {
          "skipTests": true
        },
        "@schematics/angular:guard": {
          "skipTests": true
        },
        "@schematics/angular:module": {
          "skipTests": true
        },
        "@schematics/angular:pipe": {
          "skipTests": true
        },
        "@schematics/angular:service": {
          "skipTests": true
        },
        "@schematics/angular:application": {
          "strict": true
        }
      },
      "root": "projects/sample-app",
      "sourceRoot": "projects/sample-app/src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/sample-app",
            "index": "projects/sample-app/src/index.html",
            "main": "projects/sample-app/src/main.ts",
            "polyfills": "projects/sample-app/src/polyfills.ts",
            "tsConfig": "projects/sample-app/tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              "projects/sample-app/src/favicon.ico",
              "projects/sample-app/src/assets"
            ],
            "styles": ["projects/sample-app/src/styles.scss"],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "browserTarget": "sample-app:build:production"
            },
            "development": {
              "browserTarget": "sample-app:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "sample-app:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "projects/sample-app/src/test.ts",
            "polyfills": "projects/sample-app/src/polyfills.ts",
            "tsConfig": "projects/sample-app/tsconfig.spec.json",
            "karmaConfig": "projects/sample-app/karma.conf.js",
            "inlineStyleLanguage": "scss",
            "assets": [
              "projects/sample-app/src/favicon.ico",
              "projects/sample-app/src/assets"
            ],
            "styles": ["projects/sample-app/src/styles.scss"],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-eslint/builder:lint",
          "options": {
            "lintFilePatterns": [
              "projects/sample-app/**/*.ts",
              "projects/sample-app/**/*.html"
            ]
          }
        },
        "cypress-run": {
          "builder": "@cypress/schematic:cypress",
          "options": {
            "devServerTarget": "sample-app:serve",
            "configFile": "projects/sample-app/cypress.json"
          },
          "configurations": {
            "production": {
              "devServerTarget": "sample-app:serve:production"
            }
          }
        },
        "cypress-open": {
          "builder": "@cypress/schematic:cypress",
          "options": {
            "devServerTarget": "sample-app:serve",
            "watch": true,
            "headless": false,
            "configFile": "projects/sample-app/cypress.json"
          },
          "configurations": {
            "production": {
              "devServerTarget": "sample-app:serve:production"
            }
          }
        },
        "e2e": {
          "builder": "@cypress/schematic:cypress",
          "options": {
            "devServerTarget": "sample-app:serve",
            "watch": true,
            "headless": false,
            "configFile": "projects/sample-app/cypress.json"
          },
          "configurations": {
            "production": {
              "devServerTarget": "sample-app:serve:production"
            }
          }
        }
      }
    },
    "customizations-example": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss"
        },
        "@schematics/angular:application": {
          "strict": true
        }
      },
      "root": "projects/customizations-example",
      "sourceRoot": "projects/customizations-example/src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/customizations-example",
            "index": "projects/customizations-example/src/index.html",
            "main": "projects/customizations-example/src/main.ts",
            "polyfills": "projects/customizations-example/src/polyfills.ts",
            "tsConfig": "projects/customizations-example/tsconfig.app.json",
            "inlineStyleLanguage": "scss",
            "assets": [
              "projects/customizations-example/src/favicon.ico",
              "projects/customizations-example/src/assets"
            ],
            "styles": ["projects/customizations-example/src/styles.scss"],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "fileReplacements": [
                {
                  "replace": "projects/customizations-example/src/environments/environment.ts",
                  "with": "projects/customizations-example/src/environments/environment.prod.ts"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "browserTarget": "customizations-example:build:production"
            },
            "development": {
              "browserTarget": "customizations-example:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "customizations-example:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "projects/customizations-example/src/test.ts",
            "polyfills": "projects/customizations-example/src/polyfills.ts",
            "tsConfig": "projects/customizations-example/tsconfig.spec.json",
            "karmaConfig": "projects/customizations-example/karma.conf.js",
            "inlineStyleLanguage": "scss",
            "assets": [
              "projects/customizations-example/src/favicon.ico",
              "projects/customizations-example/src/assets"
            ],
            "styles": ["projects/customizations-example/src/styles.scss"],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-eslint/builder:lint",
          "options": {
            "lintFilePatterns": [
              "projects/customizations-example/**/*.ts",
              "projects/customizations-example/**/*.html"
            ]
          }
        }
      }
    }
  },
  "defaultProject": "stream-chat-angular"
}


