# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140723204509) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "tasks", force: true do |t|
    t.integer  "poster_id",              null: false
    t.integer  "lobster_id"
    t.string   "title"
    t.text     "description"
    t.string   "category",               null: false
    t.string   "zipcode",     limit: 10
    t.date     "date",                   null: false
    t.integer  "timeframe",              null: false
    t.string   "address"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "tasks", ["category"], name: "index_tasks_on_category", using: :btree
  add_index "tasks", ["date"], name: "index_tasks_on_date", using: :btree
  add_index "tasks", ["lobster_id"], name: "index_tasks_on_lobster_id", using: :btree
  add_index "tasks", ["poster_id"], name: "index_tasks_on_poster_id", using: :btree
  add_index "tasks", ["timeframe"], name: "index_tasks_on_timeframe", using: :btree
  add_index "tasks", ["title"], name: "index_tasks_on_title", using: :btree
  add_index "tasks", ["zipcode"], name: "index_tasks_on_zipcode", using: :btree

  create_table "transactions", force: true do |t|
    t.integer  "task_id",             null: false
    t.datetime "completion_datetime", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "transactions", ["completion_datetime"], name: "index_transactions_on_completion_datetime", using: :btree
  add_index "transactions", ["task_id"], name: "index_transactions_on_task_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "name",                       null: false
    t.string   "email",                      null: false
    t.string   "phone1",          limit: 15, null: false
    t.string   "phone2",          limit: 15
    t.string   "zipcode",         limit: 10
    t.string   "password_digest",            null: false
    t.string   "token",                      null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["name"], name: "index_users_on_name", using: :btree
  add_index "users", ["zipcode"], name: "index_users_on_zipcode", using: :btree

end