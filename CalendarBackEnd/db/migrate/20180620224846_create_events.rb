class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
      t.date :date
      t.time :start_time, null: false
      t.time :end_time, null: false

      t.timestamps
    end
  end
end
