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

ActiveRecord::Schema.define(version: 20151123192318) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cats", force: :cascade do |t|
    t.string   "name",                                   null: false
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.string   "profile_image_file_name"
    t.string   "profile_image_content_type"
    t.integer  "profile_image_file_size"
    t.datetime "profile_image_updated_at"
    t.integer  "location",                   default: 0, null: false
    t.integer  "available",                  default: 0, null: false
    t.integer  "sex",                        default: 0, null: false
    t.integer  "creator_id"
    t.text     "description"
  end

  create_table "cats_vaccines", force: :cascade do |t|
    t.integer "cat_id",     null: false
    t.integer "vaccine_id", null: false
  end

  add_index "cats_vaccines", ["cat_id"], name: "index_cats_vaccines_on_cat_id", using: :btree
  add_index "cats_vaccines", ["vaccine_id"], name: "index_cats_vaccines_on_vaccine_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  create_table "vaccines", force: :cascade do |t|
    t.integer  "category",   default: 0, null: false
    t.date     "given"
    t.date     "expires"
    t.text     "comments"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

end
