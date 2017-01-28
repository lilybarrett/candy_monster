class CandySerializer < ActiveModel::Serializer
  attributes :name, :url, :points, :id

  def url
    object.image_url
  end
end
